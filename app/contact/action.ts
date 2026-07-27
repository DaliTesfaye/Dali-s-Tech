"use server"

import { Resend } from "resend"

// Initialize the Resend client with your environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

export interface FormState {
  success?: boolean
  error?: string
  message?: string
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get("email") as string

  // Simple runtime validation
  if (!email || !email.includes("@")) {
    return { error: "Please enter a valid email address." }
  }

  try {
    // Send the automation notification
    const { data, error } = await resend.emails.send({
      from: "Dali <hello@mail.dalixtech.me>", 
      to: [email],
      subject: "Thank you for getting in touch!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Thank You</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #FAF9F6; font-family: 'Courier New', Courier, monospace; color: #1A1A1A;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td align="center" style="padding: 40px 10px;">
                  
                  <table role="presentation" width="100%" style="max-width: 500px; background-color: #FFFFFF; border: 4px solid #1A1A1A; box-shadow: 6px 6px 0px 0px #A855F7;" cellspacing="0" cellpadding="0" border="0">
                    
                    <tr>
                      <td style="background-color: #FF6B6B; padding: 16px; border-bottom: 4px solid #1A1A1A;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td>
                              <strong style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #1A1A1A;">
                                ✉️ Message Received
                              </strong>
                            </td>
                            <td align="right">
                              <span style="font-size: 11px; font-weight: bold; color: #1A1A1A;">[SUCCESS]</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding: 32px 24px;">
                        <h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.5px;">
                          Thanks for reaching out!
                        </h1>
                        
                        <p style="font-size: 14px; line-height: 1.6; font-weight: bold; margin-bottom: 24px;">
                          I have successfully received your request from your email address (${email}). 
                        </p>
                        
                        <div style="background-color: #F3F4F6; border: 2px solid #1A1A1A; padding: 16px; margin-bottom: 24px;">
                          <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #6B7280; display: block; margin-bottom: 4px;">
                            What happens next:
                          </span>
                          <strong style="font-size: 13px; color: #1A1A1A;">
                            I will review your message and get back to you personally within 24 hours.
                          </strong>
                        </div>
                        
                        <p style="font-size: 13px; line-height: 1.5; color: #4B5563; margin-bottom: 0;">
                          Speak soon!
                        </p>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding: 16px 24px; border-top: 2px dashed #E5E7EB; background-color: #FAFAFA;" align="center">
                        <p style="font-size: 11px; font-weight: bold; color: #9CA3AF; margin: 0; text-transform: uppercase; letter-spacing: 1px;">
                          Dali's tech '
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                  
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    if (error) {
      return { error: error.message }
    }

    return { 
      success: true, 
      message: "Success! Check your inbox for confirmation." 
    }

  } catch (err) {
    return { error: "Something went wrong. Please try again later." }
  }
}