import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ReservationRule} from './model/reservation-rule';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class BookingComponent implements OnInit {

  reservationRules$?: Observable<ReservationRule[]>;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.reservationRules$ = this.translate.get('page.booking.section.reservationRules.ruleList');
  }
}
