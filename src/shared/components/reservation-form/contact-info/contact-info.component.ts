import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';

import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {DateRange} from '@angular/material/datepicker';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ContactInfoComponent {

  startDate: Date | null = null;
  endDate: Date | null = null;

  onSelect(date: Date | null): void {
    if (!this.startDate || (this.startDate && this.endDate)) {
      this.startDate = date;
      this.endDate = null;
    } else {
      if (this.startDate && date && date > this.startDate) {
        this.endDate = date;
      } else {
        this.endDate = this.startDate;
        this.startDate = date;
      }
    }
    this.contactForm.controls['dateRange'].setValue(new DateRange<Date>(this.startDate, this.endDate));
  }

  readonly contactForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      dateRange: [null, Validators.required],
      includeBreakfast: [false],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      personCount: [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted', this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onKeyDownNumberValidation(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    if (allowedKeys.includes(event.key)) {
      return; // Эти клавиши разрешены, ничего не делаем
    }

    // Преобразуем клавишу в символ и проверяем, является ли она цифрой
    const isNumber = /^[0-9]$/.test(event.key);

    if (!isNumber) {
      event.preventDefault(); // Блокируем ввод, если не число
    }
  }

}
