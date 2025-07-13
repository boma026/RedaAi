import express from "express"
import helmet from "helmet"
import { router } from "./routes/routes";
import dotenv from 'dotenv';
import cors from "cors"

dotenv.config();
const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors({origin: "http://localhost:3000"}));
server.use("/", router);

const PORT = process.env.PORT || 4000;

server.listen(process.env.PORT, () =>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})