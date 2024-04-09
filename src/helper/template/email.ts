import { sanitizeString } from "..";
import { formData } from "../../interface/form";


export const emailTemplate = (formData:formData)=>{
    return `Email: ${sanitizeString(formData.email)}\nProduct: ${formData.product}\nBlockchain: ${formData.blockchain}\nWallet Address: ${sanitizeString(formData.address)}\nMessage: ${sanitizeString(formData.message)}\n${formData.txnHash ? 'TxnHash: '+sanitizeString(formData.txnHash)+"\n":""}${formData.username ? 'UserName: '+sanitizeString(formData.username)+"\n":""}
    `;
    
}