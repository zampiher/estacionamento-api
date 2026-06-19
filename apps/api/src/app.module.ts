import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CarSlotsModule } from './car-slots/car-slots.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    CarSlotsModule,
    CarsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
