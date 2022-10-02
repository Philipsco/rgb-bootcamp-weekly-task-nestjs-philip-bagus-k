import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ClinicModule } from './clinic/clinic.module';
import { AuthModule } from './auth/auth.module';
import { FacilityModule } from './facility/facility.module';
import { ClinicFacilityModule } from './clinic-facility/clinic-facility.module';

@Module({
  imports: [
    ClinicModule,
    AuthModule,
    FacilityModule,
    ClinicFacilityModule,
    RouterModule.register([
      {
        path: 'cms',
        module: ClinicModule,
      },
      {
        path: 'cms',
        module: AuthModule,
      },
      {
        path: 'cms',
        module: FacilityModule,
      },
      {
        path: 'cms',
        module: ClinicFacilityModule,
      },
    ]),
  ],
})
export class CmsModule {}
