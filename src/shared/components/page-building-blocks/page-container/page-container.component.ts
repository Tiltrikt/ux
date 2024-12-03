import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css',
  standalone: false
})
export class PageContainerComponent {

  @Input() title: string = 'title';
}
