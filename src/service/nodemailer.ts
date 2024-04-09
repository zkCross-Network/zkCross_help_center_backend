import nodemailer from "nodemailer";
import EnvironmentVars from "../config/env.config";

const transporter = nodemailer.createTransport({
    service: EnvironmentVars.smtp_service,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: EnvironmentVars.smtp_email,
      pass: EnvironmentVars.smtp_pass,
    },
  });
export default class Service{
  static async sendMail(emailTemplate:string):Promise<any> {
    const info = await transporter.sendMail({
      from: `"zkCross Form" <${EnvironmentVars.smtp_email}>`,
      to: EnvironmentVars.support_email, 
      subject:"Help-Center Form Submission",
      text:emailTemplate, 
    });
    return info;
  }
}