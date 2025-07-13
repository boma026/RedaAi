import{ Prisma }from "../generated/prisma"
import { createUserModel, findUserByEmail, findUserByUser } from "../model/userModel";
import bcrypt from "bcryptjs"

export const createUser = async (data: Prisma.UserCreateInput) =>{
    const existingUserEmail = await findUserByEmail(data.email);
    
    if(existingUserEmail){
        console.log("Email ja cadastrado!");
        return;
    }

    const existingUserUser = await findUserByUser(data.user);
    
    if(existingUserUser){
        console.log("Usuário ja cadastrado!")
        return;
    }

    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash;

    return createUserModel(data);
}

export const verifyUser = async (user: string, password: string) => {
    const userVerified = await findUserByUser(user)
    if(!userVerified){
        console.log("Usuário nao encontrado");
        return null;
    }

    const passwordMatch = await bcrypt.compare(password, userVerified.password);
    if(!passwordMatch){
        console.log("senha nao confere")
        return null;
    }
    return userVerified;
}
