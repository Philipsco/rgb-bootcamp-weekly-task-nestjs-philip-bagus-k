import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { Clinic } from 'src/model/clinic.model';
import { ClinicModule } from './clinic/clinic.module';

@Module({
  imports: [
    ClinicModule,
    RouterModule.register([
      {
        path: 'cms',
        module: ClinicModule,
      },
    ]),
  ],
})
export class CmsModule {}
