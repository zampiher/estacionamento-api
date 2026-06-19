import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CarsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCarDto: CreateCarDto): Promise<{
        plate: string;
        brand: string | null;
        color: string | null;
        model: string | null;
        year: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        userId: number | null;
    }>;
    findAll(): Promise<{
        plate: string;
        brand: string | null;
        color: string | null;
        model: string | null;
        year: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        userId: number | null;
    }[]>;
    findOne(id: number): Promise<{
        plate: string;
        brand: string | null;
        color: string | null;
        model: string | null;
        year: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        userId: number | null;
    }>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<{
        plate: string;
        brand: string | null;
        color: string | null;
        model: string | null;
        year: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        userId: number | null;
    }>;
    remove(id: number): Promise<{
        plate: string;
        brand: string | null;
        color: string | null;
        model: string | null;
        year: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        userId: number | null;
    }>;
}
