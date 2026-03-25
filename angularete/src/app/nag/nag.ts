import { Component,signal } from '@angular/core';
import {form, FormField} from '@angular/forms/signals';

@Component({
  selector: 'app-nag',
  standalone: true,
  imports: [FormField],
  templateUrl: './nag.html',
  styleUrl: './nag.css',
})
export class Nag {


  loginForm = signal({
    name: '',
    email: '',
    message: ''
  });

  onSubmit() {
    console.log("Form submitted!");

    // ✅ Get values
    console.log(this.loginForm());
  }

}
