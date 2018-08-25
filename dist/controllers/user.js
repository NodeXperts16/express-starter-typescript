"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./../models/User");
class UserController {
    static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
    /**
     * Create new User
     */
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const result = yield User_1.default.add(name);
                res.send({ success: true, data: result });
            }
            catch (e) {
                console.log('UserController - Create exception -->>', e);
                throw (e);
            }
        });
    }
    /**
     * Get all users
     */
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search } = req.query;
                const result = yield User_1.default.get(search);
                res.send({ success: true, data: result });
            }
            catch (e) {
                console.log('UserController - get exception -->>', e);
                throw (e);
            }
        });
    }
}
exports.default = UserController.getInstance();
//# sourceMappingURL=user.js.map