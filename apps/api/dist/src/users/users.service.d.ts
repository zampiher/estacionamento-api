import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { CarsService } from 'src/cars/cars.service';
export declare class UsersService {
    private prismaService;
    private carsService;
    constructor(prismaService: PrismaService, carsService: CarsService);
    create(createUserDto: CreateUserDto): Promise<{
        firstName: string;
        lastName: string;
        cpf: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
    }>;
    associateCarToUser(userId: number, carId: number): Promise<{
        firstName: string;
        lastName: string;
        cpf: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
    }>;
    findAll(): Promise<{
        firstName: string;
        lastName: string;
        cpf: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        firstName: string;
        lastName: string;
        cpf: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): import("../generated/prisma/models").Prisma__UserClient<{
        firstName: string;
        lastName: string;
        cpf: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: number): Promise<{
        firstName: string;
        lastName: string;
        cpf: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
    }>;
}
