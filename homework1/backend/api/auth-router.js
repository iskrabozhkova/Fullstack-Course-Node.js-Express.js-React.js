const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/user');

router.post('/register', async (req,res) => {
    const user = req.body;
    console.log('user: ' + user);
    // const foundUser = await User.findOne({email: user.email});
    // if(foundUser){
    //     return res.status(409).send({message: "User with given email already exists!"})
    // }
    // const salt = bcrypt.genSaltSync(10);
    // user.password = bcrypt.hashSync(user.password, salt);
       const newUser = new User({
           name: user.name,
           username: user.username,
           password: user.password,
           photo: user.photo,
           sex: user.sex,
           description: user.description,
           role: user.role,
           status: user.status
       })
    await newUser.save();

    res.status(201).send({message: "User created"})
})
module.exports = router;