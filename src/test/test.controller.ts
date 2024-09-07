import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  @Get()
  async getHello() {
    return await this.testService.getHello();
  }

  @Post()
  async setHello() {
    return await this.testService.setHello();
  }
}
