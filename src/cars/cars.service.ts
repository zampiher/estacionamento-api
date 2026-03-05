import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    const { brand, model, plate, year } = createCarDto;
    return await this.prisma.car.create({
      data: {
        brand: brand,
        model: model,
        plate: plate,
        year: year,
        
      }
    });
  }

  async findAll() {
    return await this.prisma.car.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.car.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const { brand, model, plate } = updateCarDto;
    return await this.prisma.car.update({
      where: { id },
      data: {
        brand: brand,
        model: model,
        plate: plate,
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.car.delete({
      where: { id }
    });
  }
}
