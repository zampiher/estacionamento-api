import { Test, TestingModule } from '@nestjs/testing';
import { CarSlotsService } from './car-slots.service';

describe('CarSlotsService', () => {
  let service: CarSlotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarSlotsService],
    }).compile();

    service = module.get<CarSlotsService>(CarSlotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
