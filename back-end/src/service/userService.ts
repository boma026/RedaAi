import { error } from "console";
import{ Prisma }from "../generated/prisma"
import { createUserModel, findUserByEmail, findUserByUser } from "../model/userModel";
import bcrypt from "bcryptjs"

export const createUser = async (data: Prisma.UserCreateInput) =>{
    const existingUserEmail = await findUserByEmail(data.email);
    
    if(existingUserEmail){
        throw new error("Email ja cadastrado");
    }

    const existingUserUser = await findUserByUser(data.user);
    
    if(existingUserUser){
        throw new error("Usuário ja cadastrado");
    }

    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash;

    return createUserModel(data);
}

export const verifyUser = async (user: string, password: string) => {
    const userVerified = await findUserByUser(user)
    if(!userVerified){
        throw new Error("Usuário nao encontrado");
    }

    const passwordMatch = await bcrypt.compare(password, userVerified.password);
    if(!passwordMatch){
        throw new Error("senha nao confere");
    }
    return userVerified;
}
