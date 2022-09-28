import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClinicCMS } from 'src/model/clinic.cms.model';
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
