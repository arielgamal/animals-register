import express from 'express'
import { createUser, listUsers, getUserById, getUserByUsername } from '../controllers/userController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('LOVE PET');
});
router.get('/users', listUsers);
router.post('/users', createUser);
router.get('/user/username/:username', getUserByUsername);
router.get('/user/id/:id', getUserById);

export default router