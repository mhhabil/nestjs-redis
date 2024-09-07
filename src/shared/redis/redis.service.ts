import { Inject, Injectable } from '@nestjs/common';
import { RedisCommandArgument } from '@redis/client/dist/lib/commands';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private redisClient: RedisClientType) {
    redisClient.on('error', (err) => console.log('Redis error', err));
    redisClient.on('connect', () => console.log('Redis connected.'));
    redisClient.on('reconnecting', () => console.log('Redis reconnecting.'));
    redisClient.on('ready', () => console.log('Redis ready.'));
  }

  async get(key: string) {
    try {
      return await this.redisClient.get(key);
    } catch (error) {
      throw error;
    }
  }

  async set(key: string, value: RedisCommandArgument) {
    try {
      return await this.redisClient.set(key, value);
    } catch (error) {
      throw error;
    }
  }

  async keys(id: string, path: string) {
    try {
      const result = await this.redisClient.json.objKeys(id, path);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async jsonGet(id: string, path?: Array<string> | string) {
    try {
      const result = await this.redisClient.json.get(id, { path });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async jsonSet(id: string, path: string, value: any) {
    try {
      await this.redisClient.json.set(id, path, value);
    } catch (error) {
      throw error;
    }
  }

  async jsonDel(id: string, path: string) {
    try {
      await this.redisClient.json.del(id, path);
    } catch (error) {
      throw error;
    }
  }
}
