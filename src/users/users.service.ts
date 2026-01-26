import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prismaService.user.create({
      data: {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        cpf: createUserDto.cpf,
      },
    });

    return user;
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
