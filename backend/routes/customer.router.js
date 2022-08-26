const express = require('express');
const customerRoutes = express.Router();
const { getUsers, getUserById, updateUser, getUserByEmail } = require('../controllers/Customer/UserController');
const { userLogin, registerUser } = require('../controllers/Customer/Authentication')

customerRoutes.post('/', registerUser);
customerRoutes.get('/users', getUsers);
customerRoutes.get('/:id', getUserById);
customerRoutes.put('/:id', updateUser);
customerRoutes.get('/', getUserByEmail);
customerRoutes.post('/login', userLogin);

module.exports = customerRoutes;