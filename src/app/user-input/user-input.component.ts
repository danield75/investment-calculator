import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturn = 0;
  enteredDuration = 0;

  private investmentService = inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment,
      duration: this.enteredDuration,
      expectedReturn: this.enteredExpectedReturn,
      annualInvestment: this.enteredAnnualInvestment,
    });
  }
}
