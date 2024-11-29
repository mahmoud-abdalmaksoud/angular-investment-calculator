import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInput } from './investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredIntialInvestement = '0';
  enteredAnnualInvestement = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  @Output() calculate = new EventEmitter<investmentInput>();

  onSubmit() {
    this.calculate.emit({
      annualInvestment: +this.enteredAnnualInvestement,
      initialInvestment: +this.enteredIntialInvestement,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });
  }
}
