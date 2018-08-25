import { Router } from 'express';
import user from './routes/user';

const router = Router();

/**
 * @swagger
 * /health-check:
 *   get:
 *     tags:
 *       - General
 *     description: Health Check
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: I am OK
 */
router.get('/health-check', (req, res) => {
  res.send('I am OK');
});

router.use('/users', user);

export default router;
