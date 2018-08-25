"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird"); // eslint-disable-line no-global-assign
const mongoose = require("mongoose");
// plugin bluebird promise in mongoose
mongoose.Promise.Promise = Promise;
class Database {
    static open({ mongoUri, testEnv }) {
        return new Promise((resolve, reject) => {
            // Mongoose options
            const options = {
                autoIndex: false,
                bufferMaxEntries: 0,
                keepAlive: 1,
                poolSize: 10,
                reconnectInterval: 500,
                reconnectTries: Number.MAX_VALUE,
                useNewUrlParser: true,
            };
            // Mock the mongoose for testing purpose using Mockgoose
            // connect to mongo db
            mongoose.connect(mongoUri, options, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
            mongoose.connection.on('error', () => {
                throw new Error(`unable to connect to database: ${mongoUri}`);
            });
        });
    }
    static close() {
        mongoose.disconnect();
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map