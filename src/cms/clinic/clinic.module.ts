import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { ClinicCMS } from 'src/model/clinic.cms.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ClinicCMS])],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}
