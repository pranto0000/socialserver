import express from 'express';
import authRouter from './authRoutes.js'
import userRoute from './userRoutes.js'
import postRoute from './postRoutes.js'



const router = express.Router();

router.use(`/auth`, authRouter)
router.use(`/users`, userRoute)
router.use(`/posts`,postRoute)
export default router