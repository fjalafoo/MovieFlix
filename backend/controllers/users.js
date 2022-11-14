const User = require('../models/User')


//require bcrypt
const bcrypt = require('bcrypt');
const rand = 12; //we always use this random along with bcrypt, it will make the password unpredictible 

//require jsonwebtoken
const jwt = require('jsonwebtoken')

async function createUser(req,res){

    try {

        //Plain text password to Encrypted String
        let hashedPassword = bcrypt.hashSync(req.body.password,rand)
        console.log(hashedPassword)

        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })
        res.json(newUser)
    } 
    catch(err){
        res.json(err)
    }
   
}

const auth_signin_post = async (req,res)=>{
    let {email,password} = req.body;

    console.log(email);

    try {
        let user = await User.findOne({email});
        console.log(user)
        if(!user){
            return res.json({message:"User not found."}).status(400);
        }

        //Password Comparison
        const isMatch = await bcrypt.compareSync(password,user.password)
        console.log(password) //Plain text password
        console.log(user.password) //encrypted password

        if(!isMatch){
            return res.json({message:"Password not matched"}).status(400);
        }

        //JWT --> token
        const payload={
            user: {
                id:user._id,
                name: user.name
            }
        }
        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: 36000000},
            (err, token)=>{
                if(err) throw err;
                res.json({token}).status(200)
            }
        )

    } catch(error){
        console.log(error)
        res.json({message: "You are not loggedin! Try again later. "}).
        status(400);
    }
}

module.exports = {
    createUser,
    auth_signin_post
}