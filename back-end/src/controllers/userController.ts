import { RequestHandler } from "express";
import { createUser, verifyUser } from "../service/userService";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const registerController:RequestHandler = async (req,res) => {
    console.log(req.body)
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.user){
       res.status(400).json({error: "dados inválidos"})
       return; 
    }

    try{
        const createdUser = await createUser(req.body);
        if(createdUser){
            res.status(201).json({createdUser, status: true });
            return;
    }}

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
    console.log(user,password);
    const userVerified = await verifyUser(user, password);
    if(userVerified){
        const token = JWT.sign(
            {id: userVerified.id, user: userVerified.user}, 
            process.env.JWT_SECRET_KEY as string,
            {expiresIn: "1h"})
            
        res.status(201).json({ userVerified, status: true, token });
       
    }
    else{
        res.status(500).json({error: "Deu problema!"})
    }
} 

/*
export const getEssaysController:RequestHandler = async (req,res) => {
    const {id} = req.body;
    const userEssays = await getEssay(id);
    if(userEssays){
        res.status(200).json({ userEssays })
    }
    else{
        res.status(500).json({error: "Deu problema!"})
    }
}

export const addEssayController:RequestHandler = async (req,res) => {
    const {essay} = req.body;
    const createdUser = await addEssay(essay);
    if(createdUser){
        res.status(201).json({ createdUser })
    }
    else{
        res.status(500).json({error: "Deu problema!"})
    }
}

*/