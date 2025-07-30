
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from './entities/revenu.entity';
import { RevenuService } from './revenu.service';
import { RevenuController } from './revenu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Revenu])],
  controllers: [RevenuController],
  providers: [RevenuService],
})
export class RevenuModule {}
