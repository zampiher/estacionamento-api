import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarSlotsService } from './car-slots.service';
import { CreateCarSlotDto } from './dto/create-car-slot.dto';
import { UpdateCarSlotDto } from './dto/update-car-slot.dto';

@Controller('car-slots')
export class CarSlotsController {
  constructor(private readonly carSlotsService: CarSlotsService) {}

  @Post()
  create(@Body() createCarSlotDto: CreateCarSlotDto) {
    return this.carSlotsService.create(createCarSlotDto);
  }

  @Get()
  findAll() {
    return this.carSlotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carSlotsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarSlotDto: UpdateCarSlotDto) {
    return this.carSlotsService.update(+id, updateCarSlotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carSlotsService.remove(+id);
  }
}
