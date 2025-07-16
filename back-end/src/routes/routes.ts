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

router.get("/essay",auth, getEssayController);

router.get("/essays", auth, getEssaysController);

router.post("/essay", auth, postEssayController);
