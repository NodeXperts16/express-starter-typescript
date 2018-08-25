import * as Promise from 'bluebird';
import * as mongoose from 'mongoose';

import { IUser, IUserModel } from './interfaces';

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
UserSchema.method({

});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get User
   * @param {ObjectId} id - The objectId of User.
   * @returns {Promise<IUser>}
   */
  add(name: string): Promise<IUser> {
    return this.create({ name });
  },
  /**
   * Get User
   * @param {ISearch} search - data to be search as wildcard
   * @returns {Promise<IUser>}
   */
  get(search: string): Promise<IUser[]> {
    console.log(search);
    return this.find({ name: { $regex: search || '', $options: 'i' }});
  },
};

/**
 * @typedef User
 */
const User: IUserModel = mongoose.model<IUser, IUserModel>('User', UserSchema);
export default User;
