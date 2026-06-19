import { CarSlotsService } from './car-slots.service';
import { CreateCarSlotDto } from './dto/create-car-slot.dto';
import { UpdateCarSlotDto } from './dto/update-car-slot.dto';
export declare class CarSlotsController {
    private readonly carSlotsService;
    constructor(carSlotsService: CarSlotsService);
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
    findOne(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    } | null>;
    update(id: string, updateCarSlotDto: UpdateCarSlotDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        carId: number | null;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
