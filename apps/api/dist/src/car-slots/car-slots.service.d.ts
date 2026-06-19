import { CreateCarSlotDto } from './dto/create-car-slot.dto';
import { UpdateCarSlotDto } from './dto/update-car-slot.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CarSlotsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createCarSlotDto: CreateCarSlotDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
    findAll(): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    findOne(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    } | null>;
    update(id: number, updateCarSlotDto: UpdateCarSlotDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
    associateCarToCarSlot(carId: number, carSlotId: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
