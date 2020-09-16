import CalculationService from './service/CalculationService';
import DisplayService from './service/DisplayService';
import HandleEventService from './service/HandleEventService';

const handleEventService = new HandleEventService(
  new DisplayService(),
  new CalculationService()
);
handleEventService.registerHandlers();
