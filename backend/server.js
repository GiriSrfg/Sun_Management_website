import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Dynamic CORS configurations supporting local development and production
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

// Spam Prevention: Rate limiting for form submissions in production
// Max 5 callback requests per hour per IP address
const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // Limit each IP to 5 requests per hour
  message: {
    success: false,
    message: 'Too many callback requests from this IP. Please try again after an hour.'
  },
  standardHeaders: true, // Return standard rate limit info headers
  legacyHeaders: false, // Disable the X-RateLimit-* headers
});

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Sun Management API is running!' });
});

// Post endpoint for callback / contact form submissions (with rate limiter protection)
app.post('/api/callback', apiLimiter, async (req, res) => {
  const { 
    fullName, 
    firstName, // support both fullName and firstName (Home.jsx uses firstName)
    companyName, 
    email, 
    workEmail, // support both email and workEmail
    phone, 
    service, 
    message 
  } = req.body;

  // Standardize the values
  const nameVal = fullName || firstName || 'Not Provided';
  const emailVal = email || workEmail || 'Not Provided';
  const companyVal = companyName || 'Not Provided';
  const phoneVal = phone || 'Not Provided';
  const serviceVal = service || 'General Inquiry';
  const messageVal = message || 'No message provided.';

  console.log(`Received callback request from ${nameVal} (${emailVal})`);

  // 1. Determine which email provider to use
  let transporter;
  let fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
  let toEmail = process.env.TO_EMAIL || 'lourdraj@getitpick.in';

  const isResendConfigured = !!process.env.RESEND_API_KEY;
  const isGmailConfigured = !!process.env.GMAIL_USER && !!process.env.GMAIL_APP_PASS;

  if (isResendConfigured) {
    console.log('Configuring Nodemailer for Resend SMTP...');
    transporter = nodemailer.createTransport({
      host: 'smtp.resend.com',
      port: 465,
      secure: true,
      auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY
      }
    });
  } else if (isGmailConfigured) {
    console.log('Configuring Nodemailer for Gmail SMTP...');
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS
      }
    });
    // For Gmail, the "from" address is always the authenticated user
    fromEmail = process.env.GMAIL_USER;
  } else {
    // Development fallback mock mode
    console.warn('WARNING: No email provider credentials configured in .env. Running in Mock Mode.');
    return res.status(200).json({ 
      success: true, 
      message: '[MOCK DEMO] Inquiry received successfully! (Email logs printed to the backend terminal since no SMTP credentials are configured.)',
      data: { name: nameVal, email: emailVal, phone: phoneVal, company: companyVal, service: serviceVal, message: messageVal }
    });
  }

  // 2. Generate a beautiful, premium, cleanly styled HTML email
  const htmlTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Callback Request - Sun Management</title>
    <style>
      body {
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #f7f9fc;
        margin: 0;
        padding: 0;
        color: #333333;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        border: 1px solid #e1e8ed;
      }
      .header {
        background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
        color: #ffffff;
        padding: 30px 40px;
        text-align: center;
        border-bottom: 3px solid #d4af37; /* gold color accent */
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 1px;
        color: #ffffff;
      }
      .header p {
        margin: 5px 0 0 0;
        font-size: 14px;
        color: #9ca3af;
      }
      .content {
        padding: 40px;
      }
      .section-title {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: #d4af37;
        font-weight: bold;
        margin-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 8px;
      }
      .grid {
        display: table;
        width: 100%;
        margin-bottom: 30px;
      }
      .grid-row {
        display: table-row;
      }
      .grid-label {
        display: table-cell;
        padding: 10px 0;
        font-weight: 600;
        color: #4b5563;
        width: 35%;
        font-size: 14px;
        border-bottom: 1px solid #f3f4f6;
      }
      .grid-value {
        display: table-cell;
        padding: 10px 0;
        color: #111827;
        font-size: 14px;
        border-bottom: 1px solid #f3f4f6;
      }
      .message-box {
        background-color: #f9fafb;
        border-left: 4px solid #d4af37;
        padding: 20px;
        border-radius: 4px;
        font-size: 14px;
        line-height: 1.6;
        color: #374151;
        font-style: italic;
      }
      .footer {
        background-color: #f3f4f6;
        color: #6b7280;
        text-align: center;
        padding: 20px;
        font-size: 12px;
        border-top: 1px solid #e5e7eb;
      }
      .footer p {
        margin: 5px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>SUN MANAGEMENT</h1>
        <p>Statutory Compliance & Financial Services Inquiry</p>
      </div>
      <div class="content">
        <div class="section-title">New Callback Request Details</div>
        
        <div class="grid">
          <div class="grid-row">
            <div class="grid-label">Full Name</div>
            <div class="grid-value">${nameVal}</div>
          </div>
          <div class="grid-row">
            <div class="grid-label">Company Name</div>
            <div class="grid-value">${companyVal}</div>
          </div>
          <div class="grid-row">
            <div class="grid-label">Work Email</div>
            <div class="grid-value">${emailVal}</div>
          </div>
          <div class="grid-row">
            <div class="grid-label">Phone Number</div>
            <div class="grid-value">${phoneVal}</div>
          </div>
          <div class="grid-row">
            <div class="grid-label">Service Selected</div>
            <div class="grid-value"><strong>${serviceVal}</strong></div>
          </div>
        </div>

        <div class="section-title">Client Message</div>
        <div class="message-box">
          "${messageVal.replace(/\n/g, '<br/>')}"
        </div>
      </div>
      
      <div class="footer">
        <p>This inquiry was sent automatically from the Sun Management Website form.</p>
        <p>&copy; ${new Date().getFullYear()} Sun Management Services. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;

  // 3. Send the email
  try {
    const mailOptions = {
      from: `"Sun Management Callback" <${fromEmail}>`,
      to: toEmail,
      subject: `📞 Callback Request: ${nameVal} - ${serviceVal}`,
      html: htmlTemplate,
      replyTo: emailVal // lets the client hit "reply" directly in their inbox to answer the user!
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully! MessageId: ', info.messageId);

    return res.status(200).json({ 
      success: true, 
      message: 'Inquiry sent successfully! Our experts will contact you shortly.' 
    });
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send inquiry. Please try again later or contact us directly at lourdraj@getitpick.in.' 
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🟢 Sun Management API Server is running on port ${PORT}`);
  console.log(`🟢 Mode: ${process.env.RESEND_API_KEY ? 'Resend SMTP' : (process.env.GMAIL_USER ? 'Gmail SMTP' : 'Mock Development Mode')}`);
  console.log(`==================================================`);
});
