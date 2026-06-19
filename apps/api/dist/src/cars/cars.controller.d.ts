import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCarDto: UpdateCarDto): Promise<{
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
    remove(id: string): Promise<{
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
