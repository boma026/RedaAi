import { RequestHandler } from "express";
import JWT from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const auth:RequestHandler = async (req, res, next) => {
   
    if (req.headers.authorization) {
        console.log("passou aqui")
        const [authType, token] = req.headers.authorization.split(" ");
        if (authType === "Bearer"){
            try {
                console.log("passou aqui2")
                JWT.verify(token, process.env.JWT_SECRET_KEY as string);
                console.log("passou aqui3")
                next();
            }
            catch(e){
                res.status(403).json({error: "Não autorizado"})
            }
        }
    }
}