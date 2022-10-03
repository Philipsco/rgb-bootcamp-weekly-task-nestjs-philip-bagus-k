import { CacheModule, Module } from '@nestjs/common';
import config from './config';
import type { ClientOpts } from 'redis';

@Module({
  imports: [CacheModule.register<ClientOpts>(config as any)],
})
export class ConfigCacheModule {}
