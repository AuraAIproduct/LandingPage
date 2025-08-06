# Email Setup Guide for Atlas Landing Page

This guide will help you set up automated email notifications for demo requests using Resend.

## 🚀 Quick Setup

### 1. Get a Resend API Key

1. Go to [resend.com](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key (it starts with `re_`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=your-email@company.com
```

**Important Notes:**
- `FROM_EMAIL` should be a verified domain in Resend
- `TO_EMAIL` is where you'll receive demo requests
- For development, you can use Resend's test domain: `onboarding@resend.dev`

### 3. Verify Your Domain (Production)

For production, you'll need to verify your domain in Resend:

1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., `yourcompany.com`)
3. Add the DNS records provided by Resend
4. Wait for verification (usually takes a few minutes)

### 4. Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the environment variables in Vercel dashboard
4. Deploy!

## 📧 Email Features

### What happens when someone submits a demo request:

1. **You receive an email** with:
   - Contact information (name, email, company, role)
   - Their message (if provided)
   - Professional formatting

2. **They receive a confirmation email** with:
   - Thank you message
   - Next steps
   - Professional branding

### Email Templates

The emails are fully customizable. Edit the HTML templates in `api/send-email.ts` to match your brand.

## 🔧 Customization

### Update Email Content

Edit the HTML templates in `api/send-email.ts`:

- **Line 25-60**: Email sent to your team
- **Line 70-110**: Confirmation email sent to users

### Add Attachments

To attach a demo file, add this to the email object:

```javascript
attachments: [
  {
    filename: 'atlas-demo.pdf',
    content: fs.readFileSync('./demo-file.pdf'),
  },
],
```

### Add CC/BCC

```javascript
cc: ['team@yourcompany.com'],
bcc: ['admin@yourcompany.com'],
```

## 🛠️ Troubleshooting

### Common Issues:

1. **"Invalid API key"**
   - Check your Resend API key is correct
   - Ensure it starts with `re_`

2. **"Domain not verified"**
   - Use `onboarding@resend.dev` for testing
   - Verify your domain in Resend dashboard

3. **"Email not sending"**
   - Check browser console for errors
   - Verify API endpoint is accessible
   - Check Vercel function logs

### Testing Locally:

1. Create `.env.local` file
2. Run `npm run dev`
3. Submit a test form
4. Check Vercel function logs

## 📊 Analytics

Resend provides email analytics:
- Delivery rates
- Open rates
- Click rates
- Bounce rates

Access these in your Resend dashboard.

## 🔒 Security

- API keys are stored as environment variables
- Emails are sent server-side
- Form validation prevents spam
- Rate limiting is handled by Resend

## 💰 Pricing

Resend pricing:
- **Free tier**: 3,000 emails/month
- **Paid plans**: Starting at $20/month for 50,000 emails

Perfect for demo request forms! 