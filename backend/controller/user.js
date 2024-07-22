import { generateWebToken } from "../config/generateWebToken.js";
import { User } from "../models/User.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    // field validation
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please enter all fields')
    }
    //if user exist
    const userExist = await User.findOne({ email })
    if (userExist) { 
        return res.status(400).json({ error: 'User already exists' });
    }
    try {
        //create user
        const user = await User.create({
            name,
            email,
            password
        })
    
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                token: await generateWebToken(user._id)
            })
        } else { 
            return res.status(400).json({ error: 'Failed to create the user.' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
}

export const authUser = async (req, res) => {
    const { email, password } = req.body
    
    if (!email || !password) {// field validation
        res.status(400);
        throw new Error('Please enter all fields')
    }
    try {
        const user = await User.findOne({ email })// find user using email field
        
        if (user && (await user.matchPassword(password))) {// compare bcrypted entered password and stroed password 
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                token: await generateWebToken(user._id)
            })
        }
        else {// user not found
            return res.status(400).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
}