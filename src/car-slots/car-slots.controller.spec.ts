import { Test, TestingModule } from '@nestjs/testing';
import { CarSlotsController } from './car-slots.controller';
import { CarSlotsService } from './car-slots.service';

describe('CarSlotsController', () => {
  let controller: CarSlotsController;
  let service: CarSlotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarSlotsController],
      providers: [
        {
          provide: CarSlotsService,
          useValue: {
            associateCarToCarSlot: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CarSlotsController>(CarSlotsController);
    service = module.get<CarSlotsService>(CarSlotsService);
  });

  it('should delegate the car-slot association to the service', async () => {
    jest.spyOn(service, 'associateCarToCarSlot').mockResolvedValue({ id: 7 } as never);

    const result = await controller.associateCarToCarSlot('7', { carId: 3 });

    expect(service.associateCarToCarSlot).toHaveBeenCalledWith(3, 7);
    expect(result).toEqual({ id: 7 });
  });
});
