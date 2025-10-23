import express from 'express'
import { createUser, listUsers } from '../controllers/userController.js';

const router = express.Router();
const { createUser, listUsers } = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send('LOVE PET');
});
router.get('/users', listUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);

export default router