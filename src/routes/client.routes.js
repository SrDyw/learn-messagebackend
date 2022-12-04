import { Router } from "express";
import { deleteMessage, indexRoute, loadMessages, sendMessage } from "../controllers/client.controller.js";

const router = Router();

router.get('/message',loadMessages)
router.get('/', indexRoute);
router.post('/message', sendMessage);
router.get('/delete/:id', deleteMessage)
export default router;