import { Module } from '@nestjs/common';
import { ClinicFacilityService } from './clinic-facility.service';
import { ClinicFacilityController } from './clinic-facility.controller';
import { ClinicFacility } from 'src/model/clinic.facility.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    SequelizeModule.forFeature([ClinicFacility]),
  ],
  controllers: [ClinicFacilityController],
  providers: [ClinicFacilityService],
  exports: [PassportModule],
})
export class ClinicFacilityModule {}
