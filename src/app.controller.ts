import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

// routing endPoint
@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postHello(): string {
    return this.appService.postHello();
  }
  @Put()
  putHello(): string {
    return this.appService.putHello();
  }
  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }
}
