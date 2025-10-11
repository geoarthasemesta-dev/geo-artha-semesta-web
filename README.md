# PT Geo Artha Semesta - Landing Page Documentation

## Project Overview

This is a multilingual landing page project for PT Geo Artha Semesta built with Next.js 14, TypeScript, and Tailwind CSS. The project features a bilingual interface (English/Indonesian) with contact form functionality using Nodemailer for email notifications.

---

## Technology Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 14.x    | React framework with App Router |
| TypeScript   | 5.x     | Type-safe development           |
| Tailwind CSS | 3.x     | Utility-first CSS framework     |
| Nodemailer   | Latest  | Email sending functionality     |
| i18next      | Latest  | Internationalization library    |

---

## Project Structure

```
geo-artha-semesta-web/
├── .next/                      # Next.js build output
├── app/                        # Next.js App Router directory
│   ├── [locale]/              # Locale-based routing
│   │   ├── components/        # React components
│   │   │   ├── bilingual/    # Translation components
│   │   │   ├── drawer/       # Drawer/sidebar components
│   │   │   ├── modal/        # Modal components
│   │   │   └── section/      # Page section components
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Home page component
│   ├── api/                   # API routes
│   │   └── contact-us/       # Contact form API endpoint
│   │       └── route.ts      # POST handler for contact form
│   ├── hooks/                 # Custom React hooks
│   ├── favicon.ico           # Site favicon
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # App layout
│   ├── robot.ts              # Robots.txt configuration
│   └── sitemap.ts            # Sitemap configuration
├── lib/                       # Utility libraries
│   ├── create-user.php       # PHP script for user creation
│   ├── email.ts              # Email templates and utilities
│   ├── i18n-client.ts        # Client-side i18n configuration
│   └── i18n.ts               # Server-side i18n configuration
├── locales/                   # Translation files
│   ├── en/                   # English translations
│   │   └── common.json
│   └── id/                   # Indonesian translations
│       └── common.json
├── node_modules/              # Dependencies
├── public/                    # Static assets
├── translation/               # Translation utilities
├── types/                     # TypeScript type definitions
├── utils/                     # Utility functions
├── .env                       # Environment variables (not in git)
├── .gitignore                # Git ignore rules
├── eslint.config.mjs         # ESLint configuration
└── middleware.ts             # Next.js middleware for i18n routing
```

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# SMTP Configuration for Email Sending
SMTP_HOST="mail.geoarthasemesta.com"         # SMTP server hostname
SMTP_PORT="465"                              # SMTP port (587 for TLS, 465 for SSL)
SMTP_USER="no-reply@geoarthasemesta.com"     # SMTP authentication username
SMTP_PASS="hostPTG@S99"                      # SMTP authentication password
ADMIN_EMAIL="info@geoarthasemesta.com"       # Email address to receive contact form submissions

# Database API Configuration
BASE_API_ACCESS_DB="https://geoarthasemesta.com/api"  # Base URL for database API (PHP backend)
```

### SMTP Configuration Examples

**Gmail:**

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

**Outlook/Office365:**

```env
SMTP_HOST="smtp.office365.com"
SMTP_PORT=587
SMTP_USER="your-email@outlook.com"
SMTP_PASS="your-password"
```

**Custom SMTP:**

```env
SMTP_HOST="mail.yourdomain.com"
SMTP_PORT=587
SMTP_USER="noreply@yourdomain.com"
SMTP_PASS="your-password"
```

---

## Key Features & Implementation

### 1. Internationalization (i18n)

The project uses `i18next` and `react-i18next` for multilingual support.

#### File Structure:

- **`lib/i18n.ts`** - Server-side i18n configuration
- **`lib/i18n-client.ts`** - Client-side i18n configuration
- **`locales/en/common.json`** - English translations
- **`locales/id/common.json`** - Indonesian translations
- **`middleware.ts`** - Route-based locale detection and redirection

#### Translation Provider:

```typescript
// Located in: app/[locale]/components/bilingual/TranslationProvider.tsx
import { useTranslation } from "react-i18next";

// Usage in components:
const { t } = useClientTranslation(locale);
const translatedText = t("menu.home"); // Returns translated text
```

#### Supported Locales:

- `en` - English
- `id` - Indonesian (Bahasa Indonesia)

#### Translation File Structure:

```json
{
  "menu": {
    "home": "Home",
    "about": "About Us",
    "services": "Our Services",
    "equipment": "Our Equipment",
    "experience": "Project Experience",
    "contact": "Contact Us"
  },
  "contact": {
    "title": "Get in Touch",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "submit": "Send Message"
  }
}
```

---

### 2. Contact Form API

#### Endpoint: `/api/contact-us`

**Location:** `app/api/contact-us/route.ts`

**Methods:** `POST`, `GET`

#### POST Request

**Request Headers:**

```
Content-Type: application/json
```

**Request Body:**

```typescript
{
  name: string; // User's full name (required)
  email: string; // User's email address (required)
  subject: string; // Message subject (required)
  message: string; // Message content (required)
  locale: string; // Language code: "en" or "id" (required)
}
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Email sent successfully" // Localized message
}
```

**Validation Error Response (400):**

```json
{
  "success": false,
  "message": "Please fill in all required fields" // Localized message
}
```

**Server Error Response (500):**

```json
{
  "success": false,
  "message": "Failed to send message. Please try again later." // Localized message
}
```

#### GET Request

**Response (200):**

```json
{
  "message": "Contact API endpoint is working",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

#### Implementation Flow:

1. **Receive POST request** with contact form data including locale
2. **Validate input data** using `validateContactForm()` function
   - Checks name, email format, subject, message, and locale
3. **Sanitize data** - Trim whitespace, normalize email to lowercase
4. **Send email** via Nodemailer using `sendContactEmail()` from `lib/email.ts`
5. **Save to database** (optional) - POST user data to external PHP API
   - Endpoint: `BASE_API_ACCESS_DB + "/create-user.php"`
   - Sends user information to database via `create-user.php`
6. **Return localized response** based on user's selected language

#### Database Integration

The API automatically saves contact form submissions to an external database:

```typescript
// Payload sent to database
{
  name: string;
  email: string;
  subject: string;
  message: string;
  phone_number: null; // Reserved for future use
  interest: null; // Reserved for future use
}
```

**Database API Configuration:**

- Set `BASE_API_ACCESS_DB` in `.env` file
- The API calls `create-user.php` endpoint
- Database response is logged but doesn't affect email sending

---

### 3. Email System

#### Email Template Library

**Location:** `lib/email.ts`

This file contains email template functions and Nodemailer configuration.

**Key Functions:**

```typescript
// Create Nodemailer transporter
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Generate HTML email template
export function createContactEmailTemplate(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
      </head>
      <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      </body>
    </html>
  `;
}

// Send email function
export async function sendContactEmail(data: ContactFormData) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission from ${data.name}`,
    html: createContactEmailTemplate(data),
  };

  return await transporter.sendMail(mailOptions);
}
```

**Email Features:**

- HTML email templates
- Responsive design
- Automatic formatting
- Error handling
- SMTP authentication
- TLS/SSL support

---

### 4. Component Structure

#### Section Components (`app/[locale]/components/section/`)

These components represent different sections of the landing page:

- **Hero Section** - Main banner with call-to-action
- **About Section** - Company information
- **Services Section** - Service offerings
- **Equipment Section** - Equipment showcase
- **Experience Section** - Project portfolio
- **Contact Section** - Contact form
- **Footer** - Site footer with company details

#### Bilingual Components (`app/[locale]/components/bilingual/`)

- **TranslationProvider.tsx** - Provides translation context
- **LanguageSwitcher.tsx** - Language toggle component
- Uses React Context API for state management

#### Modal Components (`app/[locale]/components/modal/`)

- Reusable modal dialogs
- Form modals
- Image galleries
- Confirmation dialogs

#### Drawer Components (`app/[locale]/components/drawer/`)

- Mobile navigation drawer
- Side menu components
- Responsive hamburger menu

---

## Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- SMTP server credentials

### Step 1: Clone Repository

```bash
git clone <repository-url>
cd geo-artha-semesta-web
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Configure Environment

```bash
cp .env.example .env
# Edit .env with your SMTP credentials
```

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to view the application.

### Step 5: Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## API Routes

### POST `/api/contact-us`

**Description:** Handles contact form submissions, sends email notifications, and saves data to database.

**Request Headers:**

```
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry about Services",
  "message": "I'm interested in your geological survey services...",
  "locale": "en"
}
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

**Validation Error Response (400):**

```json
{
  "success": false,
  "message": "Please fill in all required fields"
}
```

**Server Error Response (500):**

```json
{
  "success": false,
  "message": "Failed to send message. Please try again later."
}
```

**Note:** All response messages are automatically localized based on the `locale` field in the request.

---

### GET `/api/contact-us`

**Description:** Health check endpoint to verify API is working.

**Response (200):**

```json
{
  "message": "Contact API endpoint is working",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

---

## Custom Hooks

### `useContactForm` Hook

**Location:** `app/[locale]/hooks/useContactForm.ts`

This custom hook provides an easy way to handle contact form submissions in React components.

#### Usage Example:

```typescript
import { useContactForm } from "@/hooks/useContactForm";

function ContactFormComponent() {
  const locale = "en"; // or "id"
  const { submitForm, isLoading, response, clearResponse } =
    useContactForm(locale);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await submitForm({
      name: "John Doe",
      email: "john@example.com",
      subject: "Inquiry",
      message: "Hello, I'm interested...",
    });

    if (result.success) {
      // Show success message
      console.log(result.message);
    } else {
      // Show error message
      console.error(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit"}
      </button>

      {response && (
        <div className={response.success ? "success" : "error"}>
          {response.message}
        </div>
      )}
    </form>
  );
}
```

#### Hook API:

| Property        | Type                             | Description                     |
| --------------- | -------------------------------- | ------------------------------- |
| `submitForm`    | `(data) => Promise<ApiResponse>` | Submits form data to API        |
| `isLoading`     | `boolean`                        | Loading state during submission |
| `response`      | `ApiResponse \| null`            | API response after submission   |
| `clearResponse` | `() => void`                     | Clears the response state       |

#### Input Data Type:

```typescript
{
  name: string; // Required
  email: string; // Required (must include @)
  subject: string; // Required
  message: string; // Required
}
// locale is automatically added by the hook
```

#### Features:

- ✅ Automatic locale injection
- ✅ Loading state management
- ✅ Response state management
- ✅ Error handling with localized messages
- ✅ Network error handling
- ✅ TypeScript type safety

---

## TypeScript Interfaces

### ContactFormData

**Location:** `types/contact.ts`

```typescript
export interface ContactFormData {
  name: string; // User's full name
  email: string; // Valid email address
  subject: string; // Email subject
  message: string; // Message content
  locale: string; // Language code: "en" | "id"
}
```

### CreateUserDb

**Location:** `types/contact.ts`

```typescript
export interface CreateUserDb {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone_number?: string | null; // Optional, reserved for future use
  interest?: string | null; // Optional, reserved for future use
}
```

### ApiResponse

**Location:** `types/contact.ts`

```typescript
export interface ApiResponse {
  success: boolean; // Indicates if operation was successful
  message: string; // Localized response message
}
```

---

## Email Translation System

### Translation Files

**Location:** `translation/email.ts`

The email translation system provides localized messages for:

- Email templates (subject, body)
- API response messages
- Form validation messages
- Error messages

#### Function: `getEmailTranslation(locale: string)`

```typescript
import { getEmailTranslation } from "@/translation/email";

const translations = getEmailTranslation("en");

// Available translation keys:
translations.subject; // Email subject template
translations.greeting; // Email greeting
translations.closing; // Email closing
translations.apiMessages.success; // Success message
translations.apiMessages.validationError; // Validation error
translations.apiMessages.serverError; // Server error
translations.apiMessages.networkError; // Network error
```

#### Supported Languages:

- `en` - English
- `id` - Indonesian (Bahasa Indonesia)

#### Adding New Translations:

```typescript
// In translation/email.ts
export const emailTranslations = {
  en: {
    subject: "New Contact Form Submission from {name}",
    greeting: "Hello Administrator,",
    newMessage: "You have received a new message:",
    // ... other translations
  },
  id: {
    subject: "Pesan Baru dari Formulir Kontak dari {name}",
    greeting: "Halo Administrator,",
    newMessage: "Anda menerima pesan baru:",
    // ... other translations
  },
};
```

---

## Translation System Details

### How It Works

1. **Middleware Detection** - `middleware.ts` detects user's language preference or uses browser locale
2. **Route Prefix** - URLs are prefixed with locale (`/en` or `/id`)
3. **Translation Loading** - Translations loaded from JSON files in `locales/` directory
4. **Component Usage** - Components use `useClientTranslation()` hook to access translations

### Adding New Translations

1. **Add to JSON files:**

```json
// locales/en/common.json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}

// locales/id/common.json
{
  "newSection": {
    "title": "Judul Baru",
    "description": "Deskripsi Baru"
  }
}
```

2. **Use in components:**

```typescript
const { t } = useClientTranslation(locale);
<h1>{t("newSection.title")}</h1>;
```

### Translation Best Practices

- Keep translation keys descriptive and organized
- Use nested objects for grouping related translations
- Always provide translations for both languages
- Test both language versions thoroughly
- Use variables for dynamic content: `t('welcome', { name: userName })`

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Environment Variables on Vercel

Add the following in your Vercel project settings:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `ADMIN_EMAIL`

### Other Platforms

- Ensure Node.js 18+ is available
- Set environment variables in platform settings
- Run `npm run build` during build step
- Run `npm start` to start server

---

## Troubleshooting

### Email Not Sending

**Check:**

1. SMTP credentials are correct
2. SMTP port is not blocked by firewall
3. "Less secure apps" enabled (for Gmail)
4. App-specific password created (for Gmail 2FA)
5. Check server logs for detailed error messages

**Gmail Users:**

- Use App Password instead of regular password
- Enable "Less secure app access" in Google Account settings
- Use port 587 with TLS

### Translation Not Working

**Check:**

1. Translation files exist in `locales/[locale]/common.json`
2. Translation keys match in JSON files
3. Locale parameter passed correctly to components
4. Browser cache cleared after translation updates

### Build Errors

**Common Issues:**

- TypeScript errors - Check type definitions in `types/` folder
- Missing dependencies - Run `npm install`
- Environment variables - Ensure `.env` file exists
- Port conflict - Change port in `package.json`

---

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow ESLint rules (see `eslint.config.mjs`)
- Use Tailwind CSS for styling
- Keep components small and reusable

### Component Guidelines

- Use functional components with hooks
- Implement proper TypeScript types
- Add JSDoc comments for complex functions
- Use meaningful variable and function names

### Git Workflow

```bash
git checkout -b feature/your-feature
# Make changes
git add .
git commit -m "feat: description of changes"
git push origin feature/your-feature
# Create pull request
```

---

## Maintenance & Updates

### Regular Tasks

- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Review and update translations
- Monitor email delivery rates
- Check error logs regularly

### Backup Strategy

- Database backups (if applicable)
- Environment variable backups
- Translation file versioning
- Regular code repository backups

---

## Support & Contact

For technical support or questions about this project:

**Company:** PT Geo Artha Semesta  
**Website:** https://geoarthasemesta.com  
**Email:** admin@geoarthasemesta.com  
**Phone:** +62 (21) 1234 0000

---

## License

© 2025 PT Geo Artha Semesta. All rights reserved.

---

## Changelog

### Version 1.0.0 (2025-01-XX)

- Initial release
- Bilingual support (EN/ID)
- Contact form with email integration
- Responsive design
- SEO optimization

---

**Last Updated:** January 2025  
**Documentation Version:** 1.0.0
