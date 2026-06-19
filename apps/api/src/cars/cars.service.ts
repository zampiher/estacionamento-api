import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    const { brand, model, color, plate, year } = createCarDto;
    return await this.prisma.car.create({
      data: {
        brand: brand,
        model: model,
        color: color,
        plate: plate,
        year: year,
      },
    });
  }

  async findAll() {
    return await this.prisma.car.findMany();
  }

  async findOne(id: number) {
    const car = await this.prisma.car.findUnique({
      where: { id },
    });

    if (!car) {
      throw new NotFoundException('Carro não encontrado');
    }

    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const { brand, model, color, plate } = updateCarDto;
    return await this.prisma.car.update({
      where: { id },
      data: {
        brand: brand,
        model: model,
        color: color,
        plate: plate,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.car.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
