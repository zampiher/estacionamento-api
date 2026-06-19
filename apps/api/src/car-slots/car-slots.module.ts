import { Module } from '@nestjs/common';
import { CarSlotsService } from './car-slots.service';
import { CarSlotsController } from './car-slots.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CarSlotsController],
  providers: [CarSlotsService, PrismaService],
})
export class CarSlotsModule {}
