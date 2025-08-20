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
      useFactory: (config: ConfigService): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT')!, 10),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [Depense, Revenu],
        synchronize: false,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
    DepenseModule,
    RevenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
