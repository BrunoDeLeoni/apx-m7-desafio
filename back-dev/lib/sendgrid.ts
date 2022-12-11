/* Import */
import * as sgMail from "@sendgrid/mail"

/* SendGrid */
const API_SENDGRID = process.env.TOKEN_SENDGRID
sgMail.setApiKey(API_SENDGRID)

/* Export */
export { sgMail }
