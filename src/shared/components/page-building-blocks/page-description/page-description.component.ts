import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrl: './page-description.component.css',
  standalone: false
})
export class PageDescriptionComponent {

  @Input() text: string = "";
  @Input() imageAddress: string = "kitchen.jpg";
}
