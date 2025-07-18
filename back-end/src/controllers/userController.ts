import { RequestHandler } from "express";
import { createUser, verifyUser } from "../service/userService";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const registerController:RequestHandler = async (req,res) => {

    if(!req.body.name || !req.body.email || !req.body.password || !req.body.user){
       res.status(400).json({error: "dados inválidos"})
       return; 
    }

    try{
        const createdUser = await createUser(req.body);
            res.status(201).json({createdUser, status: true });
            return;
    }

    catch(e){
        if (e.message === "Email ja cadastrado!") {
            res.status(400).json({ error: "O e-mail já está cadastrado." });
            return;
        }
        if (e.message === "Usuário ja cadastrado!") {
            res.status(400).json({ error: "O nome de usuário já está em uso." });
            return;
        }
        
    res.status(500).json({error: "Não foi possível criar o usuário"});
    return;
    }
}


export const loginController:RequestHandler = async (req,res) => {
    const { user, password } = req.body;
    try{
        const userVerified = await verifyUser(user, password);
        const token = JWT.sign(
            {id: userVerified.id, user: userVerified.user}, 
            process.env.JWT_SECRET_KEY as string,
            {expiresIn: "1h"})
            
        res.status(201).json({ userVerified, status: true, token });
       
    }catch(e){
        res.status(500).json({error: "Usuário não encontrado!"})
    }
} 

export const verifyController:RequestHandler = async (req, res) => {
    res.status(200).json({status: true});
}