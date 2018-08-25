"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const Database_1 = require("./Database");
const errorHandlers_1 = require("./../middlewares/errorHandlers");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
        this.server = undefined;
    }
    get application() {
        return this.app;
    }
    /**
     * To enable all the setting on our express app
     * @returns -Instance of Current Object
     */
    bootstrap() {
        this._initJsonParser();
        return this;
    }
    /**
     * This will run the server at specified port after opening up of Database
     *
     * @returns -Instance of Current Object
     */
    run() {
        // open Database & listen on port config.port
        const { port, env, mongo } = this.config;
        const me = this;
        Database_1.default.open({ mongoUri: mongo, testEnv: false }).then(() => {
            this.server = this.app.listen(port, () => {
                console.info(`server started on port ${port} (${env})`); // eslint-disable-line no-console
            });
        });
        return this;
    }
    /**
     *
     *
     * @returns Promise
     *
     */
    testDBConnect() {
        const { mongo } = this.config;
        return Database_1.default.open({ mongoUri: mongo, testEnv: true });
    }
    /**
     * Close the connected Database
     *
     * @returns Promise
     * @memberof Server
     */
    closeDB() {
        return Database_1.default.close();
    }
    /**
     * This will Setup all the routes in the system
     *
     * @returns -Instance of Current Object
     * @memberof Server
     */
    setupRoutes(router, stack = true) {
        const { apiPrefix } = this.config;
        // mount all routes on /api path
        this.app.use(apiPrefix, router);
        // catch 404 and forward to error handler
        this.app.use(errorHandlers_1.notFound);
        // error handler
        this.app.use(errorHandlers_1.error(stack));
        return this;
    }
    /**
     *  - Parses urlencoded bodies & JSON
     */
    _initJsonParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map