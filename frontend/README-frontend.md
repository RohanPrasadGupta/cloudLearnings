# Image Upload Frontend

This is the frontend application built with Next.js for uploading images to Cloudinary and displaying submissions.

## Features

- Modern React/Next.js application
- Image upload with preview
- Form validation
- Real-time submissions display
- Responsive design with Tailwind CSS
- TypeScript support

## Prerequisites

- Node.js (v14 or higher)
- Backend API running on port 5000

## Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the frontend directory and add:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── UploadForm.tsx
│       └── SubmissionsList.tsx
├── public/
├── .env.local
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Components

### UploadForm

- Handles image upload functionality
- Form validation
- Image preview
- Progress feedback

### SubmissionsList

- Displays recent submissions
- Real-time updates
- Responsive grid layout

## Styling

This project uses Tailwind CSS for styling. The design features:

- Modern gradient backgrounds
- Card-based layouts
- Responsive design
- Loading states
- Error handling

## API Integration

The frontend communicates with the backend API at `http://localhost:5000/api/`:

- `POST /upload` - Upload image and form data
- `GET /submissions` - Fetch all submissions
- `GET /submissions/:id` - Fetch specific submission

## Dependencies

- **next**: React framework
- **react**: UI library
- **react-dom**: React DOM renderer
- **axios**: HTTP client
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type checking

## Development

The application supports hot reloading during development. Any changes to the code will automatically refresh the browser.

## Build and Deploy

To build for production:

```bash
npm run build
npm run start
```

## Troubleshooting

1. **CORS Issues**: Make sure the backend is running and has CORS configured
2. **Image Upload Fails**: Check Cloudinary credentials in backend
3. **API Connection**: Verify the API URL in `.env.local`
