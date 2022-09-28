import { Clinic } from 'src/model/clinic.model';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

const env = dotenv.parse(fs.readFileSync('.env'));

export default {
  dialect: env.DB_DIALECT,
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASS,
  database: env.DB_NAME,
  models: [Clinic],
  autoLoadModels: env.DB_AUTOLOAD_MODEL,
  synchronize: env.DB_SYNC,
};
