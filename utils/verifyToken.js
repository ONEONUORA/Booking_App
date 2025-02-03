
import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// Middleware to verify the token
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token; 
    if (!token) {
        return next(createError(401, "You are not authenticated"));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(createError(403, "Token is not valid"));
        req.user = user; 
        next();
    });
};

// Middleware to verify the user
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if (err) return next(err); 
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next(); 
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};

// Middleware to verify admin
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if (err) return next(err); 
        if (req.user.isAdmin) {
            next(); 
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};
