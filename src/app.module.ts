import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepenseModule } from './depense/depense.module';
import { RevenuModule } from './revenu/revenu.module';

import { Depense } from './depense/entities/depense.entity';
import { Revenu } from './revenu/entities/revenu.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql.freedb.tech',
      port: 3306,
      username: 'freedb_mouhamed_17',
      password: 'b*btVM!2tdyd*9G', 
      database: 'freedb_budget_10',
      entities: [Depense, Revenu],
      synchronize: true,
      autoLoadEntities: true,
    }),
    DepenseModule,
    RevenuModule,
  ],
  controllers: [AppController], 
  providers: [AppService],       
})
export class AppModule {}
