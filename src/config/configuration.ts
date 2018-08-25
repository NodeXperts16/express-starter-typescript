import { config } from 'dotenv';
import * as constants from '../lib/constants';
import { IConfig } from './IConfig';
const envVars: NodeJS.ProcessEnv = process.env;

config();

// TODO will replace by dynamic config manager
let mongo: string = envVars.MONGO_URL;
if (envVars.NODE_ENV === constants.EnvVars.TEST) {
  mongo = envVars.MONGO_URL_TEST || `${envVars.MONGO_URL}_TEST`;
}

const isMongooseDebug = (envVars.NODE_ENV === constants.EnvVars.DEV)
  ? true : false;
const configurations = Object.freeze({
  apiPrefix: constants.API_PREFIX,
  env: envVars.NODE_ENV,
  mongo,
  mongooseDebug: isMongooseDebug,
  port: envVars.PORT,
}) as IConfig;

export default configurations;
