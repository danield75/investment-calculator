import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  private investmentService = inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn,
      annualInvestment: this.annualInvestment,
    });
  }
}
