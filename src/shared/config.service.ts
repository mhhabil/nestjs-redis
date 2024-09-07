import * as dotenv from 'dotenv';

export class ConfigService {
  constructor() {
    dotenv.config({
      path: `.env`,
    });

    if (this.nodeEnv === 'development') {
      console.info(process.env);
    }
  }

  public get(key: string): string {
    return process.env[key];
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }

  get nodeEnv(): string {
    return this.get('NODE_ENV') || 'development';
  }

  get app() {
    return {
      env: this.nodeEnv,
    };
  }

  get redis() {
    return {
      host: this.get('REDIS_HOST'),
      port: this.get('REDIS_PORT'),
      password: this.get('REDIS_PASSWORD'),
      user: this.get('REDIS_USERNAME'),
      db: this.get('REDIS_DATABASE'),
    };
  }
}
