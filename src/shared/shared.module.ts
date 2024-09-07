import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import { RedisModule } from './redis/redis.module';
import { RedisService } from './redis/redis.service';

const providers = [ConfigService, RedisService];

@Global()
@Module({
  imports: [RedisModule],
  providers: [...providers],
  exports: [...providers, RedisModule],
})
export class SharedModule {}
