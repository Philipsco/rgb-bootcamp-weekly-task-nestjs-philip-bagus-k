import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
const env = dotenv.parse(fs.readFileSync('.env'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT);
}
bootstrap();
