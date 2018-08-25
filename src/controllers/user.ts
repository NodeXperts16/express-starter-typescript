import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator/check';
import User from './../models/User';

class UserController {
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }

    return UserController.instance;
  }
  private static instance: UserController;

  /**
   * Create new User
   */
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const result = await User.add(name);
      res.send({ success: true, data: result });
    } catch (e) {
      console.log('UserController - Create exception -->>', e);
      throw (e);
    }
  }

  /**
   * Get all users
   */
  public async get(req: Request, res: Response) {
    try {
      const { search } = req.query;
      const result = await User.get(search);
      res.send({ success: true, data: result });
    } catch (e) {
      console.log('UserController - get exception -->>', e);
      throw (e);
    }
  }
}

export default UserController.getInstance();
