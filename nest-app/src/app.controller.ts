import { Controller, Get } from '@nestjs/common';
import { OptionalAuth } from '@thallesp/nestjs-better-auth';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@OptionalAuth() // TODO
  getHello(): string {
    return this.appService.getHello();
  }
}
