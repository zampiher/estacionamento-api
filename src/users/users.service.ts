import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { CarsService } from 'src/cars/cars.service';

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
    private carsService: CarsService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prismaService.user.create({
      data: {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        numero: createUserDto.numero,
        endereco: createUserDto.endereco,
        complemento: createUserDto.complemento,
        cpf: createUserDto.cpf,
      },
    });

    return user;
  }

  async associateCarToUser(userId: number, carId: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const car = await this.carsService.findOne(carId);

    const updatedUser = await this.prismaService.user.update({
      where: { id: userId },
      data: {
        cars: {
          connect: { id: car.id },
        },
      },
    });

    return updatedUser;
  }

  async findAll() {
    const users = await this.prismaService.user.findMany({
      where: {
        deletedAt: null,
      },
    });

    return users;
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
  }

  async remove(id: number) {
    return await this.prismaService.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
