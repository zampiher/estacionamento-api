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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSlotsController = void 0;
const common_1 = require("@nestjs/common");
const car_slots_service_1 = require("./car-slots.service");
const create_car_slot_dto_1 = require("./dto/create-car-slot.dto");
const update_car_slot_dto_1 = require("./dto/update-car-slot.dto");
let CarSlotsController = class CarSlotsController {
    carSlotsService;
    constructor(carSlotsService) {
        this.carSlotsService = carSlotsService;
    }
    create(createCarSlotDto) {
        return this.carSlotsService.create(createCarSlotDto);
    }
    findAll() {
        return this.carSlotsService.findAll();
    }
    findOne(id) {
        return this.carSlotsService.findOne(+id);
    }
    update(id, updateCarSlotDto) {
        return this.carSlotsService.update(+id, updateCarSlotDto);
    }
    remove(id) {
        return this.carSlotsService.remove(+id);
    }
};
exports.CarSlotsController = CarSlotsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_slot_dto_1.CreateCarSlotDto]),
    __metadata("design:returntype", void 0)
], CarSlotsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarSlotsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarSlotsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_car_slot_dto_1.UpdateCarSlotDto]),
    __metadata("design:returntype", void 0)
], CarSlotsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarSlotsController.prototype, "remove", null);
exports.CarSlotsController = CarSlotsController = __decorate([
    (0, common_1.Controller)('car-slots'),
    __metadata("design:paramtypes", [car_slots_service_1.CarSlotsService])
], CarSlotsController);
//# sourceMappingURL=car-slots.controller.js.map