// import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
//
// import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
// import {MatSelectModule} from '@angular/material/select';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatCardModule} from '@angular/material/card';
// import {MyTelInput} from "../../input/phone-input/phone-input.component";
// import {MatFormFieldModule} from "@angular/material/form-field";
// import {MatIconModule} from "@angular/material/icon";
//
//
// @Component({
//   selector: 'app-contact-info',
//   templateUrl: './contact-info.component.html',
//   styleUrl: './contact-info.component.css',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   standalone: false
// })
// export class ContactInfoComponent {
//
//   readonly contactForm: FormGroup;
//
//   constructor(private readonly formBuilder: FormBuilder) {
//     this.contactForm = this.formBuilder.group({
//       firstName: [null, Validators.required],
//       lastName: [null, Validators.required],
//       phoneNumber: [null, Validators.compose([Validators.required, Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}")])],
//       email: [null, Validators.compose([Validators.required, Validators.email])],
//       personCount: [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])],
//     });
//   }
//
//
//   onSubmit() {
//     console.log('Form submitted', this.contactForm.value);
//
//     // if (this.contactForm.valid) {
//     //   console.log('Form submitted', this.contactForm.value);
//     // } else {
//     //   console.log('Form is invalid');
//     // }
//   }
//
//   onKeyDownNumberValidation(event: KeyboardEvent): void {
//     // Разрешаем клавиши: Backspace, Tab, Delete, стрелки и т.д.
//     const allowedKeys = ['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
//
//     if (allowedKeys.includes(event.key)) {
//       return; // Эти клавиши разрешены, ничего не делаем
//     }
//
//     // Преобразуем клавишу в символ и проверяем, является ли она цифрой
//     const isNumber = /^[0-9]$/.test(event.key);
//
//     if (!isNumber) {
//       event.preventDefault(); // Блокируем ввод, если не число
//     }
//   }
//
// }
