import {Component, Input} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-learn-more-container',
  imports: [
    MatButton,
  ],
  templateUrl: './learn-more-container.component.html',
  styleUrl: './learn-more-container.component.css'
})
export class LearnMoreContainerComponent {
  @Input() text: string = "";
  @Input() imageAddress: string = "dev.png";
  @Input() leftImage: boolean = true;
  @Input() buttonText: string = "Viac informácií";
}
