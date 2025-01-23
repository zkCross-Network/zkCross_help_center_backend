import { Request, Response, NextFunction } from "express";
import { emailTemplate } from "../helper/template/email";
import { sanitizeString } from "../helper/index";
import Service from "../service/nodemailer";
import sendMessageToChannel from "../service/sendTelegramMessage";

export const formSubmit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, request_type, blockchain, address, message } = req.body;
    if (
      !(
        sanitizeString(email) &&
        sanitizeString(request_type) &&
        sanitizeString(message)
      )
    ) {
      return res
        .status(400)
        .json({ success: false, message: "missing mandatory fields" });
    }
    const emailText = emailTemplate({ ...req.body });
    await Service.sendMail(emailText);
    if (blockchain !== "Partisia") {
      return res
        .status(200)
        .json({ success: true, message: "email sent successfully" });
    }
    let telegramMessage = "Help Center Message\n — — — — — — — — — — — \n";
    for (let field in req.body) {
      telegramMessage += `${field}: ${req.body[field]}\n`;
    }
    sendMessageToChannel(telegramMessage);
    res.status(200).json({
      success: true,
      message: "email and telegram message sent successfully",
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
