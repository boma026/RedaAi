import { RequestHandler } from "express";
import dotenv from "dotenv";
import { getEssay, getUserEssays, postUserEssay } from "../service/essayService";

dotenv.config();

export const getEssaysController:RequestHandler = async (req,res) => {
    if (!req.query.userId) {
        res.status(400).json({error: "dados faltantes"});
    }
    try{
        const userId = parseInt(req.query.userId as string);
        const essays = await getUserEssays(userId);
        res.status(200).json({essays, status: true});
    }catch(e) {
        res.status(500).json({error:"não foi possivel pegar as redações"})
    }
}

export const getEssayController:RequestHandler = async (req, res) => {
    if (!req.query.essayId || !req.query.userId) {
        res.status(400).json({error: "dados faltantes"});
    }
    const essayId = parseInt(req.query.essayId as string);
    const userId = parseInt(req.query.userId as string);
    
    try{
        const essay = await getEssay(essayId, userId);
        res.status(200).json({essay, status: true})
    }catch(e) {
        res.status(500).json({error: "não foi possivel pegar a redação"})
    }
}

export const postEssayController:RequestHandler = async (req,res) => {
 
    if(!req.body.essayTitle || !req.body.essayBody || !req.body.userId){
        res.status(400).json({error: "dados faltantes"})
        return; 
    }

    try{
        const postEssay = await postUserEssay(req.body.essayTitle, req.body.essayBody, req.body.userId);
        console.log("redaçao postada")
        res.status(201).json({postEssay, status: true});
        return;

    }catch(e) {
        res.status(500).json({error: "Não foi possivel postar a redação, tente novamente mais tarde"});
    }
}