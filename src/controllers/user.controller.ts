import { Request, Response, Router } from 'express'
import User from '../models/User'

const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.send(users)
})

export default userRouter;