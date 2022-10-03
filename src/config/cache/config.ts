import * as dotenv from 'dotenv';
import * as fs from 'fs';
const env = dotenv.parse(fs.readFileSync('.env'));
import * as redisStore from 'cache-manager-redis-store';

export default {
  isGlobal: env.CACHE_ISGLOBAL,
  store: redisStore,
  host: env.CACHE_HOST,
  port: env.CACHE_PORT,
};
