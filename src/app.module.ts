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
        const dbUrl = config.get<string>('DATABASE_URL');
        console.log('DATABASE_URL:', dbUrl); // Pour vérifier la variable d'environnement

        return {
          type: 'postgres',
          url: dbUrl,
          entities: [Depense, Revenu],
          synchronize: false,
          extra: {
            ssl: {
              rejectUnauthorized: false,
            },
          },
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
