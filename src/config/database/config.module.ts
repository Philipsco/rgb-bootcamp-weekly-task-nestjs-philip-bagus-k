import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Clinic } from 'src/model/clinic.model';
import config from './config';

@Module({
  imports: [SequelizeModule.forRoot(config as any)],
})
export class ConfigModule {}
