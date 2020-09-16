export default class CalculationService {
  calculate(operand1, operand2, operator) {
    if (operator === 'add') {
      return parseFloat(operand1) + parseFloat(operand2);
    }

    if (operator === 'subtract') {
      return parseFloat(operand1) - parseFloat(operand2);
    }

    if (operator === 'multiply') {
      return parseFloat(operand1) * parseFloat(operand2);
    }

    if (operator === 'divide') {
      if (parseFloat(operand2) === 0) {
        throw Error('Division by zero');
      }

      return parseFloat(operand1) / parseFloat(operand2);
    }

    throw Error('Operand not supported');
  }
}
