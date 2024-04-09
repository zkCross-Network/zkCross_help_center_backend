import "dotenv/config";

export default class EnvironmentVars{
    static smtp_email = process.env.SMTP_EMAIL;
    static smtp_pass = process.env.SMTP_PASS;
    static smtp_service = process.env.SMTP_SERVICE;
    static smtp_port = process.env.SMTP_PORT;
    static support_email = process.env.SUPPORT_EMAIL;
}