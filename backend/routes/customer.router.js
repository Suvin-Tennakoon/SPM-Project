const express = require('express');
const customerRoutes = express.Router();
const { getUsers, getUserById, updateUser, getUserByEmail,updateUserPw } = require('../controllers/Customer/UserController');
const { userLogin, registerUser } = require('../controllers/Customer/Authentication');
const { saveReview } = require('../controllers/Customer/UserReviewController');

customerRoutes.post('/', registerUser);
customerRoutes.get('/users', getUsers);
customerRoutes.get('/:id', getUserById);
customerRoutes.put('/:id', updateUser);
customerRoutes.put('/pass/:id', updateUserPw);
customerRoutes.get('/', getUserByEmail);
customerRoutes.post('/login', userLogin);

customerRoutes.post('/savereview', saveReview);

module.exports = customerRoutes;