import express from "express"
import { loginController, registerController, verifyController } from "../controllers/userController";
import { getEssayController, getEssaysController, postEssayController } from "../controllers/essayController";
import { auth } from "../middleware/auth";

export const router = express.Router()

router.get("/ping", (req,res) => {
    res.json({pong: true});
})

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/verify", auth, verifyController);

router.get(("/essay"), getEssayController);

router.get("/essays", getEssaysController);

router.post("/essay", postEssayController);
