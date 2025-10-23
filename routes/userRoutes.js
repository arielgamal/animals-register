const express = require('express');
const router = express.Router();
const { createUser, listUsers, getUserById } = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send('API is running...');
});
router.get('/users', listUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);

module.exports = router;