"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSlotsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CarSlotsService = class CarSlotsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createCarSlotDto) {
        const carSlot = await this.prismaService.carSlot.create({
            data: {
                price: createCarSlotDto.price,
            },
        });
        return carSlot;
    }
    async findAll() {
        const carSlots = await this.prismaService.carSlot.findMany({
            where: {
                deletedAt: null,
            },
        });
        return carSlots;
    }
    async findOne(id) {
        const carSlot = await this.prismaService.carSlot.findUnique({
            where: { id },
        });
        return carSlot;
    }
    async update(id, updateCarSlotDto) {
        const carSlot = await this.prismaService.carSlot.update({
            where: { id },
            data: { ...updateCarSlotDto },
        });
        return carSlot;
    }
    async remove(id) {
        const carSlot = await this.prismaService.carSlot.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
        return carSlot;
    }
    async associateCarToCarSlot(carId, carSlotId) {
        const carSlot = await this.prismaService.carSlot.findUnique({
            where: { id: carSlotId },
        });
        if (!carSlot) {
            throw new common_1.NotFoundException('Vaga de carro não encontrada');
        }
        if (carSlot.carId) {
            throw new common_1.BadRequestException('A vaga já está em uso');
        }
        const updatedCarSlot = await this.prismaService.carSlot.update({
            where: { id: carSlotId },
            data: {
                car: {
                    connect: { id: carId },
                },
            },
        });
        return updatedCarSlot;
    }
};
exports.CarSlotsService = CarSlotsService;
exports.CarSlotsService = CarSlotsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarSlotsService);
//# sourceMappingURL=car-slots.service.js.map