import express from 'express'
import { createUser, listUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('LOVE PET');
});
router.post('/users', createUser);
router.get('/users', listUsers);

export default router