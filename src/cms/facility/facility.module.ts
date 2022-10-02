import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityController } from './facility.controller';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { Facility } from 'src/model/facility.model';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    SequelizeModule.forFeature([Facility]),
  ],
  controllers: [FacilityController],
  providers: [FacilityService],
  exports: [PassportModule],
})
export class FacilityModule {}
