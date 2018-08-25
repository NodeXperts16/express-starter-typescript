"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const user_1 = require("./../controllers/user");
const user_2 = require("./../validations/user");
const router = express_1.Router();
/**
 * @swagger
 * /user/:
 *   post:
 *     tags:
 *       - Home
 *     description: Creates a new Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Home name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Home'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/Home'
 */
router.route('/')
    .post(check_1.checkSchema(user_2.default.create), user_1.default.create)
    .get(check_1.checkSchema(user_2.default.get), user_1.default.get);
exports.default = router;
//# sourceMappingURL=user.js.map