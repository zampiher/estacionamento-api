import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CarSlotsModule } from './car-slots/car-slots.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, CarSlotsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
