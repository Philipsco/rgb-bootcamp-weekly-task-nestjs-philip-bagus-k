import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import config from './config';

@Module({
  imports: [SequelizeModule.forRoot(config as any)],
})
export class ConfigModule {}
