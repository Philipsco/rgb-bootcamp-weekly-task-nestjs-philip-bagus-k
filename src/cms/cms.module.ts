import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ClinicModule } from './clinic/clinic.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ClinicModule,
    AuthModule,
    RouterModule.register([
      {
        path: 'cms',
        module: ClinicModule,
      },
      {
        path: 'cms',
        module: AuthModule,
      },
    ]),
  ],
})
export class CmsModule {}
