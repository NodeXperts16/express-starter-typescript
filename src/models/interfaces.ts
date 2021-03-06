import { Document, Model } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  createdAt: Date;
  name: string;
}

export interface IUserModel extends Model<IUser> {
  get: (search: string) => Promise<IUser[]>;
  add: (name: string) => Promise<IUser>;
}
