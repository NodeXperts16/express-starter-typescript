import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import Database from './Database';

import { error, notFound } from './../middlewares/errorHandlers';

export default class Server {
  private app: express.Express;
  private server?: http.Server;

  constructor(private config: any) {
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
  public bootstrap() {

    this._initJsonParser();

    return this;
  }

  /**
   * This will run the server at specified port after opening up of Database
   *
   * @returns -Instance of Current Object
   */
  public run() {
    // open Database & listen on port config.port
    const { port, env, mongo } = this.config;
    const me = this;

    Database.open({ mongoUri: mongo, testEnv: false }).then(() => {
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
  public testDBConnect() {
    const { mongo } = this.config;
    return Database.open({ mongoUri: mongo, testEnv: true });
  }

  /**
   * Close the connected Database
   *
   * @returns Promise
   * @memberof Server
   */
  public closeDB() {
    return Database.close();
  }

  /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
  public setupRoutes(router: express.Router, stack: boolean = true) {

    const { apiPrefix } = this.config;
    // mount all routes on /api path
    this.app.use(apiPrefix, router);

    // catch 404 and forward to error handler
    this.app.use(notFound);

    // error handler
    this.app.use(error(stack));

    return this;
  }

  /**
   *  - Parses urlencoded bodies & JSON
   */
  private _initJsonParser() {

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
}
