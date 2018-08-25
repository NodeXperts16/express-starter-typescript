import { Router } from 'express';
import { checkSchema } from 'express-validator/check';

import user from './../controllers/user';
import validation from './../validations/user';

const router = Router();

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
  .post(
    checkSchema(validation.create as any),
    user.create,
  )
  .get(
    checkSchema(validation.get as any),
    user.get,
  );

export default router;
