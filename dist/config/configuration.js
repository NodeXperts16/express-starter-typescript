"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const constants = require("../lib/constants");
const envVars = process.env;
dotenv_1.config();
// TODO will replace by dynamic config manager
let mongo = envVars.MONGO_URL;
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
});
exports.default = configurations;
//# sourceMappingURL=configuration.js.map