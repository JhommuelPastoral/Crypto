import express from 'express';
import { Login, logOut} from '../controllers/auth.controller.js';
import protectedRoute from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/login', Login);
router.get('/me', protectedRoute, (req, res) => {return res.status(200).json({user:req.user})});
router.post('/log-out', logOut);

export default router;