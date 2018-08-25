"use strict";
// config should be imported before importing any other file
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./config/configuration");
const Server_1 = require("./lib/Server");
const router_1 = require("./router");
const server = new Server_1.default(configuration_1.default);
server.bootstrap()
    .setupRoutes(router_1.default);
exports.default = server;
//# sourceMappingURL=server.js.map