import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/shared/redis/redis.service';

@Injectable()
export class TestService {
  constructor(private readonly _redisService: RedisService) {}

  async getHello() {
    return await this._redisService.get('hello');
  }

  async setHello() {
    return await this._redisService.set('hello', 'world');
  }
}
