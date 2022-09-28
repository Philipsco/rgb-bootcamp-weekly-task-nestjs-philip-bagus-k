import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClinicApps } from 'src/model/clinic.apps.model';

@Module({
  imports: [SequelizeModule.forFeature([ClinicApps])],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}
