const express = require('express');
const { deleteUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.delete('/:id', deleteUser);
router.get('/', getAllUsers);

module.exports = router;
