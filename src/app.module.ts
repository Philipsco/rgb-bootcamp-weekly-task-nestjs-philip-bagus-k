import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppsModule } from './apps/apps.module';
import { CmsModule } from './cms/cms.module';
import { ClinicCMS } from './model/clinic.cms.model';

@Module({
  imports: [
    AppsModule,
    CmsModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'clinic_rgb',
      models: [ClinicCMS],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
