import jstoken from "jsonwebtoken";
import { User } from "../models/User.js";

export const protect = async (req, res, next) => {
    try {
        let token;
        
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            try {
                token = req.headers.authorization.split(" ")[1];

                if (!token) {
                    res.status(401);
                    throw new Error('Unauthorized, no token provided');
                }
                
                // Decode token
                const decoded =await jstoken.verify(token, process.env.JSONTOKEN_SECRET);

                // Fetch user without password
                let user = await User.findById(decoded.id).select('-password');

                // Ensure the password field is removed
                if (user) {
                    const userObj = user.toObject();
                    req.user = userObj;
                } else {
                    res.status(404);
                    throw new Error('User not found');
                }
                next();
            } catch (error) {
                console.error('Token verification error:', error.message, error.stack);
                return res.status(401).json({ message: 'Unauthorized, token failed' });
            }
        }
    } catch (error) {
        res.status(401);
        throw new Error('Unauthorized, no token');
    }
}