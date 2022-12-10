import * as sgMail from "@sendgrid/mail"

const API_SENDGRID = process.env.TOKEN_SENDGRID
sgMail.setApiKey(API_SENDGRID)

export { sgMail }
