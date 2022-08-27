const User = require('../../models/Customer/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {

    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;
        
        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        if (user && (await bcrypt.compare(req.body.password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                "mysecrettoken",
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json({token, user});
        }
        else if(!user){
            res.status(400).send("Invalid Email");
        }
        res.status(400).send("Invalid password");
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
};


const registerUser = async (req, res) => {

    // Our register logic starts here
    try {
        // Get user input
        const { userId, firstName, middleName, lastName, email, dateOfBirth, mobile, status, password, accountType } = req.body;

        // Validate user input
        if (!(email && password && firstName && middleName && lastName && userId && dateOfBirth && mobile && status && accountType)) {
            res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            res.status(409).send("User Already Exist. Please Login");
            return -1;
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = new User({
            userId,
            firstName,
            middleName,
            lastName,
            dateOfBirth,
            mobile,
            accountType,
            status,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        await user.save();

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            "mysecrettoken",
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json({user, token});
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
};

module.exports = { userLogin, registerUser }