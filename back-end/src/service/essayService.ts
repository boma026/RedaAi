import { Essay } from "../generated/prisma";
import { getEssayModel, getUserEssaysModel, postUserEssayModel, updateEssayAftrerCorrectionModel } from "../model/essayModel"
import { essayCorrect } from "./iaService";

export const getUserEssays = async (id: number) => {
    return await getUserEssaysModel(id);
}

export const getEssay = async (essayId: number, userId: number) => {
    return await getEssayModel(essayId,userId);
}

export const postUserEssay = async (essayTitle: string, essayBody: string, userId: number) => {
    const newEssay = await postUserEssayModel(essayTitle, essayBody, userId);
    if(!newEssay){
        return null;
    }
    essayCorrect(essayBody)
        .then(async (correctionResult) => {
            await updateEssayAftrerCorrectionModel(newEssay.id, correctionResult)
    })
    .catch((e) => {
        console.error("erro na correçao por IA", e);

    })
    
    return newEssay;
}

