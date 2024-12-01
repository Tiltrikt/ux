import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-description',
    imports: [
        MatButton
    ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  @Input() text: string = "Na chate sa môžete občerstviť denne od 08:00 – 22:00. Máte možnosť vybrať si z ponuky tradičných slovenských jedál, pripravovaných nielen s láskou, ale aj z čerstvých surovín podľa receptov našich starých mám.";
  @Input() imageAddress: string = "kitchen.jpg";
}
