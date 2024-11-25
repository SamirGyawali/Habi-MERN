import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //hash the password
    const hassedPassword = await bcrypt.hash(password, 10);


    // create a new user and save it to db
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hassedPassword,
      },
    });
    res.status(201).json({
      message: "User created Sucessfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create user, choose unique username",
    });
  }
};
export const login = async (req, res) => {
    const {username, password} = req.body;

    try{
        // check if user exists
        const user = await prisma.user.findUnique({
            where:{username: username}
        })
        if(!user) return res.status(401).json({message: "Invalid Credentials"});
        
        // if password correct
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) return res.status(401).json({
            message: "Invalid Password!"
        })


        // generate cookie and send to the user
        const age = 1000*60*60*24*7;
        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET_KEY, {expiresIn: age})
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: age,
        }).status(200).json({
            message: "Welcome "+user.username
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Username or Password Invalid"
        })
    }

};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({
    message: "Logout Sucessfull"
  })
};
