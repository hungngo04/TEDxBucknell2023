// https://jwt.io/introduction
// https://swagger.io/docs/specification/authentication/bearer-authentication/
// https://www.sohamkamani.com/nodejs/jwt-authentication/
// Do note that for signed tokens this information, though protected against tampering, is readable by anyone. 
// Do not put secret information in the payload or header elements of a JWT unless it is encrypted.

// Basically, this middleware can be used to authorize/enforce access controls for certain routes
// like post routes.

import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send("Access Denied");
        }

        if (token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

