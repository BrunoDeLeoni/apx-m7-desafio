/* API Key SendGrid */
/* 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 */

import * as sgMail from "@sendgrid/mail"

const API_SENDGRID = "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"
sgMail.setApiKey(API_SENDGRID)

export { sgMail }
