const express = require('express');
const router = express.Router();
const { createUser, listUsers } = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send('API is running...');
});
router.post('/users', createUser);
router.get('/users', listUsers);

module.exports = router;