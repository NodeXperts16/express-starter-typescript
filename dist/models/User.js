"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
/**
 * User Schema
 */
/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 */
const UserSchema = new mongoose.Schema({
    createdAt: {
        default: Date.now,
        type: Date,
    },
    name: {
        required: true,
        type: String,
    },
});
/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
/**
 * Methods
 */
UserSchema.method({});
/**
 * Statics
 */
UserSchema.statics = {
    /**
     * Get User
     * @param {ObjectId} id - The objectId of User.
     * @returns {Promise<IUser>}
     */
    add(name) {
        return this.create({ name });
    },
    /**
     * Get User
     * @param {ISearch} search - data to be search as wildcard
     * @returns {Promise<IUser>}
     */
    get(search) {
        console.log(search);
        return this.find({ name: { $regex: search || '', $options: 'i' } });
    },
};
/**
 * @typedef User
 */
const User = mongoose.model('User', UserSchema);
exports.default = User;
//# sourceMappingURL=User.js.map