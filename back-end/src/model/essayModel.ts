
import { prisma } from "../libs/prisma"
import { CorrectionResult } from "../types";

export const getUserEssaysModel = async (id: number) => {
    const user= await prisma.user.findFirst({
        where: {id},
        select: {
            essay: {
                select: {
                    id: true,
                    title: true,
                    body: true,
                    createdAt: true,
                    feedback: true,
                    grade: true,
                    status: true,
                },
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    })
    return user?.essay;
}

export const getEssayModel = async (essayId:number, userId: number) => {
    try{
        return await prisma.essay.findFirst({
            where: {id: essayId, userId},
        })
    }catch(e) {
        console.error("Não foi possivel achar a redaçao!")
    }
}

export const postUserEssayModel = async (essayTitle: string, essayBody: string, userId: number) => {
    try{
        return await prisma.essay.create({
            data: {
                title: essayTitle,
                body: essayBody,
                userId
            }
        })
    }catch(e){
        console.error("Nao foi possivel cadastrar a redaçao no banco", e);
    }

}

export const updateEssayAftrerCorrectionModel = async (essayId: number, correctionResult: CorrectionResult) => {
    try{
        return await prisma.essay.update({
            where: {id: essayId},
            data: {
                grade: correctionResult.grade,
                feedback: correctionResult.feedback,
                status: "CORRIGIDA",
                competency1: correctionResult.competency1,
                competency2: correctionResult.competency2,
                competency3: correctionResult.competency3,
                competency4: correctionResult.competency4,
                competency5: correctionResult.competency5                
            }
        })
    }catch(e){
        console.error("Nao foi possivel cadastrar a redaçao no banco", e);
    }
}