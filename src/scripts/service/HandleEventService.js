export default class HandleEventService {
  constructor(DisplayService, CalculationService) {
    this.displayService = DisplayService;
    this.calculationService = CalculationService;

    this.resetEveerything();
  }

  registerHandlers() {
    const buttons = document.querySelector('.calculator_buttons');

    buttons.addEventListener('click', event => {
      if (!event.target.matches('button')) {
        return;
      }

      const operation = event.target.dataset.operation;
      const number = event.target.dataset.digit;

      if (operation !== undefined) {
        this.handleOperator(operation);
      }

      if (number !== undefined) {
        this.handleNumeric(number);
      }
    });
  }

  resetEveerything() {
    this.stash = null;
    this.currentValue = '0';
    this.activeOperator = null;
    this.shallResetCurrentValue = false;

    this.displayService.display(this.currentValue);
  }

  handleOperator(operator) {
    if (operator === 'clear') {
      this.resetEveerything();
    }

    if (this.stash === null) {
      if (operator === 'equals') {
        this.shallResetCurrentValue = true;
        this.activeOperator = null;

        return;
      }

      this.activeOperator = operator;
      this.shallResetCurrentValue = true;

      return;
    }

    try {
      const result = this.calculationService.calculate(
        this.stash,
        this.currentValue,
        this.activeOperator
      );

      this.currentValue = result.toString();
      this.displayService.display(this.currentValue);
      this.activeOperator = null;
      if (operator !== 'equals') {
        this.activeOperator = operator;
      }
    } catch (e) {
      this.activeOperator = null;
      this.currentValue = '0';
      this.displayService.display('ERROR');
    }

    this.stash = null;
    this.shallResetCurrentValue = true;
  }

  handleNumeric(numeric) {
    if (this.shallResetCurrentValue === true) {
      this.shallResetCurrentValue = false;

      if (this.activeOperator !== null) {
        this.stash = this.currentValue;
      }

      this.currentValue = '0';
    }

    if (numeric === '.') {
      if (!this.currentValue.includes('.')) {
        this.currentValue += '.';
      }
    } else if (this.currentValue === '0') {
      this.currentValue = numeric;
    } else {
      this.currentValue += numeric;
    }

    this.displayService.display(this.currentValue);
  }
}
