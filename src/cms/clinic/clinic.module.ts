import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { Clinic } from 'src/model/clinic.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    SequelizeModule.forFeature([Clinic]),
  ],
  controllers: [ClinicController],
  providers: [ClinicService],
  exports: [PassportModule],
})
export class ClinicModule {}
