
// config should be imported before importing any other file

import config from './config/configuration';
import Server from './lib/Server';
import router from './router';

const server = new Server(config);
server.bootstrap()
  .setupRoutes(router);

export default server;
