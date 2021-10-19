const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();       // to use .env variables
const { schema } = require("../Models/userPolicyModel");

var UserPolicy = mongoose.model('UserPolicy', schema);


exports.getUser = async (req, res) => {
    try {
        // find user and show data but hide password
        const user = await UserPolicy.findById(req.user.id).select('-password');
        res.json(user);

    } catch (err) {
        res.status(500).json({err});
        console.log(err);
    }
}

exports.loggedUser = async (req, res) => {

    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({msg: 'User not found with provided email'});
        } else {
            console.log("user found");
        }
        const checkpassword = await bcrypt.compare(password, user.password);
        if(!checkpassword) {
            res.status(400).json({msg: "Password invalid"});
        }

        const payload = {
            user: {
                id: user.id,
                userRole: user.userRole
            }
        }
        jwt.sign(payload, process.env.SecretKey, {
            // expiresIn:360000
        },(err, token) => {
            if(err) throw err;
            res.json({token})
        })

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}
