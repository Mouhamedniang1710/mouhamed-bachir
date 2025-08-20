import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { DepenseModule } from './depense/depense.module';
import { RevenuModule } from './revenu/revenu.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Depense } from './depense/entities/depense.entity';
import { Revenu } from './revenu/entities/revenu.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): TypeOrmModuleOptions => {
        const host: string = config.get<string>('DB_HOST', 'localhost');
        const port: number = parseInt(config.get<string>('DB_PORT', '5432'), 10);
        const username: string = config.get<string>('DB_USERNAME', 'postgres');
        const password: string = config.get<string>('DB_PASSWORD', 'princeniang1710');
        const database: string = config.get<string>('DB_NAME', 'Budget_10');

        return {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          entities: [Depense, Revenu],
          synchronize: true,
        };
      },
    }),
    DepenseModule,
    RevenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
