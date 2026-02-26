import { Module } from '@nestjs/common';
import { CarSlotsService } from './car-slots.service';
import { CarSlotsController } from './car-slots.controller';

@Module({
  controllers: [CarSlotsController],
  providers: [CarSlotsService],
})
export class CarSlotsModule {}
