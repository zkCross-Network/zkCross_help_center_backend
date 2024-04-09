import express from "express";
import { formSubmit } from "../controller/form";
const router = express.Router();

router.post("/submit",formSubmit);

export default router;