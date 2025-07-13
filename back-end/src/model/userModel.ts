import { Prisma } from "../generated/prisma"
import { prisma } from "../libs/prisma"

export const findUserByEmail = async (email:string) => {
    return await prisma.user.findFirst({
        where: { email },
    })
}

export const findUserByUser = async (user:string) => {
    return await prisma.user.findFirst({
        where: { user }
    })
}


export const createUserModel = async (data:Prisma.UserCreateInput) => {
    try{
        return await prisma.user.create({ data });
    }catch(e){
        console.error("Não foi possivel cadastrar o usuario no banco", e)
        throw new Error("Erro_Banco");
    }
}
