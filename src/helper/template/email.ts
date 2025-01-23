import { sanitizeString } from "..";
import { formData } from "../../interface/form";

export const emailTemplate = (formData: formData) => {
  return `Email: ${sanitizeString(formData.email)}\nDashboard: ${
    formData.dashboard
  }\nRequest Type: ${formData.request_type}\nBlockchain: ${
    formData.blockchain
  }\nWallet Address: ${sanitizeString(
    formData.address!
  )}\nMessage: ${sanitizeString(formData.message)}\n${
    formData.transhash
      ? "TxnHash: " + sanitizeString(formData.transhash) + "\n"
      : ""
  }
    `;
};
