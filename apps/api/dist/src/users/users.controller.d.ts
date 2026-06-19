import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AssociateCarDto } from './dto/associate-car.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        firstName: string;
        lastName: string;
        cpf: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
    }>;
    associateCarToUser(associateCarDto: AssociateCarDto): Promise<{
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
