import { sanitizeString } from "..";
import { formData } from "../../interface/form";

export const emailTemplate = (formData: formData) => {
  return `Email: ${sanitizeString(formData.email)}\nDashboard: ${
    formData.dashboard
  }\nRequest Type: ${formData.request_type}\nBlockchain: ${
    formData.blockchain
  }\nWallet Address: ${formData.address!}\nMessage: ${formData.message}\n${
    formData.transhash ? "TxnHash: " + formData.transhash + "\n" : ""
  }
    `;
};
