import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ClinicModule } from './clinic/clinic.module';

@Module({
  imports: [
    ClinicModule,
    RouterModule.register([
      {
        path: 'apps',
        module: ClinicModule,
      },
    ]),
  ],
})
export class AppsModule {}
