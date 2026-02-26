import { Injectable } from '@nestjs/common';
import { CreateCarSlotDto } from './dto/create-car-slot.dto';
import { UpdateCarSlotDto } from './dto/update-car-slot.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class CarSlotsService {
  constructor(private prismaService: PrismaService) {}
  create(createCarSlotDto: CreateCarSlotDto) {
    const carSlot = this.prismaService.carSlot.create({
      data: {
        price : createCarSlotDto.price,
      },
    });
    return carSlot;
  }

  findAll() {
    const carSlots = this.prismaService.carSlot.findMany({
      where: {
        deletedAt: null,
      },
    });
    return carSlots;
  }

  findOne(id: number) {
    const carSlot = this.prismaService.carSlot.findUnique({ where: { id } });
    return carSlot;
  }

  update(id: number, updateCarSlotDto: UpdateCarSlotDto) {
    const carSlot = this.prismaService.carSlot.update({
      where: { id },
      data: { ...updateCarSlotDto },
    });
    return carSlot;
  }

  remove(id: number) {
    const carSlot = this.prismaService.carSlot.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return carSlot;
  }
}
