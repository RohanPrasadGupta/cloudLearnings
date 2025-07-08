# Image Upload Application

A full-stack application for uploading images to Cloudinary and storing metadata in MongoDB. Built with Next.js frontend and Node.js/Express backend.

## 🚀 Features

- **Image Upload**: Upload images to Cloudinary with automatic optimization
- **Form Handling**: Capture user information along with image uploads
- **MongoDB Storage**: Store image URLs and form data in MongoDB
- **Real-time Display**: View uploaded images and submissions in real-time
- **Responsive Design**: Beautiful, modern UI built with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## 📁 Project Structure

```
cloudLearnings/
├── backend/                 # Node.js/Express API
│   ├── config/
│   │   ├── cloudinaryConfig.js
│   │   └── upload.js
│   ├── models/
│   │   └── Form.js
│   ├── routes/
│   │   └── upload.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/                # Next.js React app
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── components/
│   │       ├── UploadForm.tsx
│   │       └── SubmissionsList.tsx
│   ├── .env.local
│   ├── next.config.js
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🛠️ Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local installation or cloud instance)
- **Cloudinary Account** (free tier available)

## 🔧 Setup Instructions

### 1. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd cloudLearnings
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
copy .env.example .env  # Windows
# or
cp .env.example .env    # macOS/Linux
```

Edit the `.env` file with your credentials:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGODB_URI=mongodb://localhost:27017/imageupload
PORT=5000
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Create environment file
echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local
```

### 4. Cloudinary Setup

1. Go to [Cloudinary](https://cloudinary.com) and create a free account
2. Navigate to your Dashboard
3. Copy your `Cloud name`, `API Key`, and `API Secret`
4. Update the backend `.env` file with these credentials

### 5. MongoDB Setup

**Option A: Local MongoDB**

```bash
# Install MongoDB Community Edition
# Start MongoDB service
mongod

# MongoDB will be available at mongodb://localhost:27017
```

**Option B: MongoDB Atlas (Cloud)**

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get connection string and update `MONGODB_URI` in `.env`

## 🚀 Running the Application

### Start Backend Server

```bash
cd backend
npm run dev
# Server will start on http://localhost:5000
```

### Start Frontend Server

```bash
cd frontend
npm run dev
# App will start on http://localhost:3000
```

### Access the Application

Open your browser and navigate to `http://localhost:3000`

## 📡 API Endpoints

### Upload Image

```
POST /api/upload
Content-Type: multipart/form-data

Body:
- name: string
- email: string
- image: file
```

### Get Submissions

```
GET /api/submissions
```

### Get Single Submission

```
GET /api/submissions/:id
```

## 🎨 Features Demo

1. **Upload Form**: Fill in name, email, and select an image
2. **Image Preview**: See selected image before upload
3. **Progress Feedback**: Loading states during upload
4. **Success Display**: View uploaded image with Cloudinary URL
5. **Submissions List**: See all previous uploads in real-time

## 🔍 Testing the Setup

1. Start both backend and frontend servers
2. Navigate to `http://localhost:3000`
3. Fill out the form with:
   - Name: Test User
   - Email: test@example.com
   - Image: Any image file
4. Submit and verify:
   - Image appears in Cloudinary dashboard
   - Data is saved in MongoDB
   - Submission appears in the list

## 🛡️ Security Notes

- Store sensitive credentials in environment variables
- Never commit `.env` files to version control
- Use CORS properly in production
- Implement proper error handling
- Consider rate limiting for production

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Error**: Ensure backend is running on port 5000
2. **MongoDB Connection**: Check if MongoDB service is running
3. **Cloudinary Upload Fails**: Verify credentials in `.env`
4. **Dependencies Issues**: Delete `node_modules` and reinstall

### Debug Steps:

1. Check console logs in browser developer tools
2. Check backend terminal for error messages
3. Verify environment variables are loaded
4. Test API endpoints directly with tools like Postman

## 📦 Dependencies

### Backend

- express, mongoose, cloudinary, multer, cors, dotenv

### Frontend

- next, react, axios, tailwindcss, typescript

## 🎯 Next Steps

- Add user authentication
- Implement image galleries
- Add image editing features
- Deploy to production (Vercel + Railway/Heroku)
- Add tests (Jest, Cypress)

## 📄 License

This project is open source and available under the MIT License.
