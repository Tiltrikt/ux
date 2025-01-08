import {ChangeDetectorRef, Component, inject} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateRange} from '@angular/material/datepicker';
import {DialogComponent} from '../../../../pages/booking/dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MyTel} from '../../input/phone-input/phone-input.component';
import {range, Subject, takeUntil} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

export interface ContactFormModel {
  dateRange: DateRange<Date>;
  includeBreakfast: boolean;
  firstName: string
  lastName: string;
  phoneNumber: MyTel;
  email: string;
  personCount: number;
}

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css',
  standalone: false
})
export class ContactInfoComponent {

  readonly contactForm: FormGroup;

  smallScreen: boolean = true;

  dateRange: DateRange<Date> = new DateRange<Date>(new Date(), new Date());

  destroyed = new Subject<void>();
  protected readonly range = range;

  constructor(private readonly formBuilder: FormBuilder, private readonly dialog: MatDialog, private cdRef: ChangeDetectorRef) {
    this.contactForm = this.formBuilder.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      includeBreakfast: [false],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      personCount: [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])],
    });
    this.dialog = dialog;

    inject(BreakpointObserver)
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        this.smallScreen = result.matches;
        cdRef.detectChanges();
      });
  }

  onSelect(date: Date | null): void {
    if (!this.contactForm.controls['startDate'].value || (this.contactForm.controls['startDate'].value && this.contactForm.controls['endDate'].value)) {
      this.contactForm.controls['startDate'].setValue(date);
      this.contactForm.controls['endDate'].setValue(null);
    } else {
      if (this.contactForm.controls['startDate'].value && date && date > this.contactForm.controls['startDate'].value) {
        this.contactForm.controls['endDate'].setValue(date);
      } else {
        this.contactForm.controls['endDate'].setValue(this.contactForm.controls['startDate'].value);
        this.contactForm.controls['startDate'].setValue(date);
      }
    }
    this.dateRange = new DateRange<Date>(this.contactForm.controls['startDate'].value, this.contactForm.controls['endDate'].value);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contactFormModel: ContactFormModel = {
        dateRange: new DateRange<Date>(this.contactForm.controls['startDate'].value, this.contactForm.controls['endDate'].value),
        includeBreakfast: this.contactForm.controls['includeBreakfast'].value,
        firstName: this.contactForm.controls['firstName'].value,
        lastName: this.contactForm.controls['lastName'].value,
        phoneNumber: this.contactForm.controls['phoneNumber'].value,
        email: this.contactForm.controls['email'].value,
        personCount: this.contactForm.controls['personCount'].value
      };
      console.log(contactFormModel);
      this.dialog.open(DialogComponent, {
        data: contactFormModel
      });
    } else {
    }
  }
}
