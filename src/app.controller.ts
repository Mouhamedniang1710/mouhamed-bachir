import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Route racine '/'
  @Get()
  getRoot(): string {
    return 'Bienvenue sur l\'API de gestion de budget 🚀';
  }

  // Route '/bootcamp'
  @Get('bootcamp')
  getHello(): string {
    return this.appService.getHello();
  }
}
