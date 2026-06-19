import { Test, TestingModule } from '@nestjs/testing';
import { CarSlotsController } from './car-slots.controller';
import { CarSlotsService } from './car-slots.service';

describe('CarSlotsController', () => {
  let controller: CarSlotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarSlotsController],
      providers: [CarSlotsService],
    }).compile();

    controller = module.get<CarSlotsController>(CarSlotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
