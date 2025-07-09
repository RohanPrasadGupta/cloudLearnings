# Cloudinary Image Upload App - Backend (Node.js SDK)

This backend uses the **Cloudinary Node.js SDK** to handle image uploads, which is the proper way to use Cloudinary from a Node.js server environment.

## 🚀 Setup Complete

### Files Created:

1. **`config/cloudinary.js`** - Cloudinary configuration with your credentials
2. **`service/cloudinaryService.js`** - Service layer with all Cloudinary operations
3. **`routes/imageRoutes.js`** - API endpoints for image operations
4. **`test-cloudinary.js`** - Test file to verify Node.js SDK functionality
5. **`server.js`** - Updated main server with new routes and middleware

### Packages Installed:

- `cloudinary` - Official Cloudinary Node.js SDK
- `dotenv` - Environment variable management
- `multer` - File upload middleware
- `cors` - Cross-origin resource sharing

## 🔧 IMPORTANT: Update Your Credentials

You need to update your `.env` file with real Cloudinary credentials:

```env
# Replace these with your actual Cloudinary credentials from your dashboard
CLOUDINARY_CLOUD_NAME=cloudimagev1
CLOUDINARY_API_KEY=433649162333768
CLOUDINARY_API_SECRET=your_actual_api_secret_here
MONGODB_URI=mongodb://localhost:27017/imageupload
PORT=5000
```

## Features

- Upload images to Cloudinary
- Store form data and image URLs in MongoDB
- RESTful API endpoints
- Image validation and processing
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account

## Installation

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory and add:

   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   MONGODB_URI=mongodb://localhost:27017/imageupload
   PORT=5000
   ```

4. Start MongoDB service (if running locally)

5. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### POST /api/upload

Upload an image and save form data.

**Request:**

- Method: POST
- Content-Type: multipart/form-data
- Body:
  - `name` (string): User's name
  - `email` (string): User's email
  - `image` (file): Image file

**Response:**

```json
{
  "message": "Form submitted successfully!",
  "imageUrl": "https://res.cloudinary.com/...",
  "data": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "image": "https://res.cloudinary.com/...",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /api/submissions

Get all form submissions.

**Response:**

```json
[
  {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "image": "https://res.cloudinary.com/...",
    "cloudinaryId": "...",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### GET /api/submissions/:id

Get a specific submission by ID.

## Project Structure

```
backend/
├── config/
│   ├── cloudinaryConfig.js
│   └── upload.js
├── models/
│   └── Form.js
├── routes/
│   └── upload.js
├── .env
├── package.json
└── server.js
```

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cloudinary**: Cloudinary SDK
- **multer**: File upload middleware
- **multer-storage-cloudinary**: Cloudinary storage for multer
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables

## Development

For development with auto-restart:

```bash
npm run dev
```

For production:

```bash
npm start
```
