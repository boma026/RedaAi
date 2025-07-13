import express from "express"
import { loginController, registerController } from "../controllers/userController";
import { getEssayController, getEssaysController, postEssayController } from "../controllers/essayController";

export const router = express.Router()

router.get("/ping", (req,res) => {
    res.json({pong: true});
})

router.post("/register", registerController);

router.post("/login", loginController);

router.get(("/essay"), getEssayController);

router.get("/essays", getEssaysController);

router.post("/essay", postEssayController);
