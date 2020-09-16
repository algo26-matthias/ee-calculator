export default class DisplayService {

  constructor() {
    this.domNode = document.querySelector('.calculator_display');
  }

  display(displayValue) {
    this.domNode.textContent = displayValue;
  }
}
