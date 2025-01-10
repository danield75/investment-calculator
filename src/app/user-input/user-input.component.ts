import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment?: number;
  annualInvestment?: number;
  expectedReturn?: number;
  duration?: number;

  onSubmit() {
    console.log('SUBMITTED!');
  }
}
