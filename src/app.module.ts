import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppsModule } from './apps/apps.module';
import { CmsModule } from './cms/cms.module';
import { ConfigModule } from './config/database/config.module';

@Module({
  imports: [AppsModule, CmsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
