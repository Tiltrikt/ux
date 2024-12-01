import {Component, Input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-learn-more-container',
  imports: [
    MatButton,
  ],
  templateUrl: './learn-more-container.component.html',
  styleUrl: './learn-more-container.component.css'
})
export class LearnMoreContainerComponent {
  @Input() text: string = "Na chate sa môžete občerstviť denne od 08:00 – 22:00. Máte možnosť vybrať si z ponuky tradičných slovenských jedál, pripravovaných nielen s láskou, ale aj z čerstvých surovín podľa receptov našich starých mám.";
  @Input() imageAddress: string = "dev.png";
  @Input() leftImage: boolean = true;
  @Input() buttonText: string = "Viac informácií";
}
