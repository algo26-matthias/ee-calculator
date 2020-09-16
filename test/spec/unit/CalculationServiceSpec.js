import CalculationService from '../../../src/scripts/service/CalculationService';
const using = require('jasmine-data-provider');
import { testData as dataProvider } from './CalculationDataProvider';

const calculationService = new CalculationService();

describe(
  'Ensure all mathematical operations are calculated correctly', () => {
    using(dataProvider.add, (data) => {
      it('should add two numbers yielding the correct sum', () => {
        let result = calculationService.calculate(data.op1, data.op2, 'add');
        expect(result).toEqual(data.expected);
      });
    });

    using(dataProvider.subtract, (data) => {
      it('should subtract two numbers yielding the correct sum', () => {
        let result = calculationService.calculate(data.op1, data.op2, 'subtract');
        expect(result).toEqual(data.expected);
      });
    });

    using(dataProvider.multiply, (data) => {
      it('should multiply two numbers yielding the correct sum', () => {
        let result = calculationService.calculate(data.op1, data.op2, 'multiply');
        expect(result).toEqual(data.expected);
      });
    });

    using(dataProvider.divide, (data) => {
      it('should divide two numbers yielding the correct sum', () => {
        if (data.expected === null) {
          expect( () => {
            calculationService.calculate(data.op1, data.op2, 'divide');
          }).toThrow(new Error('Division by zero'));
        } else {
          let result = calculationService.calculate(data.op1, data.op2, 'divide');
          expect(result).toEqual(data.expected);
        }
      });
    });

    it('should throw an error on an unsupported operation', () => {
      expect( () => {
        calculationService.calculate(1, 2, 'nonsense');
      }).toThrow(new Error('Operand not supported'));
    });
  });
