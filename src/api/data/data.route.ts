import { Router } from "express";
import * as dataHandler from "./data.handler"

const router = Router()

router.post('/', dataHandler.addData)

export default router