import CalculationService from '../../../src/scripts/service/CalculationService';
import DisplayService from '../../../src/scripts/service/DisplayService';
import HandleEventService from '../../../src/scripts/service/HandleEventService';

// Fake document for test environment
global.document = {
  querySelector: () => {
    return {};
  }
}

const calculationService = new CalculationService();
const displayService =  new DisplayService();
const handleEventService = new HandleEventService(displayService, calculationService);

describe('Entering numbers yields expected output', () => {

  beforeEach(() => {
    handleEventService.resetEveerything();
    spyOn(displayService, 'display');
  })

  it('adds digits to the number', () =>  {
    // typing '0' with nothing else shouldn't change anything
    handleEventService.handleNumeric('0');
    expect(displayService.display).toHaveBeenCalledWith('0');

    handleEventService.handleNumeric('1');
    expect(displayService.display).toHaveBeenCalledWith('1');
    handleEventService.handleNumeric('2');
    expect(displayService.display).toHaveBeenCalledWith('12');
    handleEventService.handleNumeric('3');
    expect(displayService.display).toHaveBeenCalledWith('123');
    handleEventService.handleNumeric('.');
    expect(displayService.display).toHaveBeenCalledWith('123.');

    // typing '.' twice shouldn't change the display
    handleEventService.handleNumeric('.');
    expect(displayService.display).toHaveBeenCalledWith('123.');

    // Add decimal places
    handleEventService.handleNumeric('5');
    expect(displayService.display).toHaveBeenCalledWith('123.5');
    handleEventService.handleNumeric('7');
    expect(displayService.display).toHaveBeenCalledWith('123.57');
    handleEventService.handleNumeric('9');
    expect(displayService.display).toHaveBeenCalledWith('123.579');
  });

  it('does not show reaction with operator and one operand', () => {
    handleEventService.handleNumeric('1');
    handleEventService.handleNumeric('2');
    handleEventService.handleNumeric('3');
    expect(displayService.display).toHaveBeenCalledWith('123');
    handleEventService.handleOperator('add');
    expect(displayService.display).toHaveBeenCalledWith('123');
  });

  it('starts the calculation with operator and two operands', () => {
    handleEventService.handleNumeric('1');
    handleEventService.handleNumeric('2');
    handleEventService.handleNumeric('3');
    expect(displayService.display).toHaveBeenCalledWith('123');
    handleEventService.handleOperator('add');
    handleEventService.handleNumeric('1');
    handleEventService.handleNumeric('2');
    handleEventService.handleNumeric('3');
    handleEventService.handleOperator('equals');
    expect(displayService.display).toHaveBeenCalledWith('246');
  });

  it('carries the result over when using second operation other than equal', () => {
    handleEventService.handleNumeric('1');
    handleEventService.handleNumeric('2');
    handleEventService.handleNumeric('3');
    expect(displayService.display).toHaveBeenCalledWith('123');
    handleEventService.handleOperator('add');
    handleEventService.handleNumeric('1');
    handleEventService.handleNumeric('2');
    handleEventService.handleNumeric('3');
    handleEventService.handleOperator('divide');
    expect(displayService.display).toHaveBeenCalledWith('246');
    handleEventService.handleNumeric('2');
    handleEventService.handleOperator('equals');
    expect(displayService.display).toHaveBeenCalledWith('123');
  });

});
