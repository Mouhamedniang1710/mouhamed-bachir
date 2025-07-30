import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';
import { Depense } from './entities/depense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Depense])],
  controllers: [DepenseController],
  providers: [DepenseService],
  exports: [DepenseService],
})
export class DepenseModule {}
