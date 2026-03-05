import { Injectable } from '@nestjs/common';
import { CreateCarSlotDto } from './dto/create-car-slot.dto';
import { UpdateCarSlotDto } from './dto/update-car-slot.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class CarSlotsService {
  constructor(private prismaService: PrismaService) {}
  async create(createCarSlotDto: CreateCarSlotDto) {
    const carSlot = await this.prismaService.carSlot.create({
      data: {
        price : createCarSlotDto.price,
      },
    });
    return carSlot;
  }

  async findAll() {
    const carSlots = await this.prismaService.carSlot.findMany({
      where: {
        deletedAt: null,
      },
    });
    return carSlots;
  }

  async findOne(id: number) {
    const carSlot = await this.prismaService.carSlot.findUnique({ where: { id } });
    return carSlot;
  }

  async update(id: number, updateCarSlotDto: UpdateCarSlotDto) {
    const carSlot = await this.prismaService.carSlot.update({
      where: { id },
      data: { ...updateCarSlotDto },
    });
    return carSlot;
  }

  async remove(id: number) {
    const carSlot = await this.prismaService.carSlot.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return carSlot;
  }
}
