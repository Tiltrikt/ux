import {Component, Input, viewChild, ViewContainerRef} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  @Input() title: string = 'title';
}
