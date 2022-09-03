const User = require('../../models/Customer/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

var jwtSecret = 'mysecrettoken';

const getUsers = async (req, res) => {

    const PAGE_SIZE = 2;
    const page = parseInt(req.query.page || "0");
    const total = await User.countDocuments({});

    try {

        const users = await User.find()
            .limit(PAGE_SIZE)
            .skip(PAGE_SIZE * page);
        res.json({
            totalPages: Math.ceil(total / PAGE_SIZE),
            users,
        });
        res.status(200);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

const getUserById = async (req, res) => {

    const id = req.params.id;

    try {

        const users = await User.findById(id);
        res.status(200).json(users);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

const updateUser = async (req, res) => {

    const { id } = req.params;
    const { firstName, middleName, lastName, email, mobile, dateOfBirth } = req.body;

    try {

        const updatedUser = ({
            firstName,
            middleName,
            lastName,
            email,
            mobile,
            dateOfBirth,
            _id: id
        });
        await User.findByIdAndUpdate(id, updatedUser, { new: true });
        res.json(updatedUser);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

const updateUserPw = async (req, res) => {

    const { id } = req.params;
    const { status, password } = req.body;

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    try {

        const updatedUser = ({
            status,
            password: encryptedPassword,
            _id: id
        });
        await User.findByIdAndUpdate(id, updatedUser, { new: true });
        res.json(updatedUser);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

const getUserByEmail = async (req, res) => {
    
    const email = req.query.email
    const query = {"email":email}
    try {

        const notes = await User.find(query);
        res.status(200).json(notes);
      } 
      catch (error) {

        console.log(error);
        res.status(404).json({ message: error.message });
      }
}

module.exports = { getUsers, getUserById, updateUser, getUserByEmail, updateUserPw }