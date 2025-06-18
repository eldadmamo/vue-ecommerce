var User = require('../models/registration')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register_user_admin = async function(req,res){
    try{
        const {name,surnames, email,role, password} = req.body;
       
        //check if the account has been created by a vendor before

       
        const response = await User.findOne({email});
        if(response){
            return res.status(400).json({msg: "user with same email already exist"});
        } else {

           const salt = await bcrypt.genSalt(10);
           const hashedPassword = await bcrypt.hash(password, salt);
           

           let user = new User({name,surnames,email,role, password: hashedPassword, isVerified: false});
           user = await user.save();


           res.status(201).json({msg: "Sign Up Successful , OTP send to email"})
        }
    }catch(e){
        res.status(500).json({error: e.message});
    }
}

const login_user = async function (req,res){
    try{
        const {email, password} = req.body;
        const findUser = await User.findOne({email});
        if(!findUser){
            return res.status(400).json({msg: "user not Found with this email"});
            
        } 
        
      
        
        else {
           const isMatch = await bcrypt.compare(password,findUser.password);
           if(!isMatch){
            return res.status(400).json({msg: "incorrect password"})
           } else {

            //set the token to expire in 1 minute

             const token = jwt.sign({id:findUser._id}, "passwordKey");

             //remove sensitive information
             const {password, ...userWithoutPassword} = findUser._doc; 

             
             res.json({token, user: userWithoutPassword })
           }
        }
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

module.exports = {
    register_user_admin,
    login_user
}



