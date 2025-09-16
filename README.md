# AiBlog - Full Stack Blog Application

AiBlog is a full stack blog application featuring user authentication, an admin dashboard, AI-powered blog content generation, and a modern responsive UI built with React,Tailwind CSS,node js,Express and MongoDB

## Features

- **User Authentication:** Register, login, and logout with JWT-based authentication.
- **Admin Dashboard:** Admins can create, update, and delete blogs, and manage their profile.
- **AI Blog Generation:** Generate blog content using Google Gemini AI.
- **Image Uploads:** Upload user avatars and blog images via Cloudinary.
- **Responsive UI:** Built with React, Tailwind CSS, and Vite.
- **REST API:** Express.js backend with MongoDB for data storage.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Cloudinary, JWT, Google Gemini AI
- **Other:** ESLint, PostCSS, React Hot Toast, React Icons

## Project Structure

```
backend/
  controller/
  jwt/
  middleware/
  models/
  routes/
  .env
  index.js
  package.json

frontend/
  public/
  src/
    components/
    context/
    dashboard/
    pages/
    App.jsx
    main.jsx
    index.css
  index.html
  package.json
  tailwind.config.js
  vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- Cloudinary account (for image uploads)
- Google Gemini API key

### Backend Setup

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```

2. **Configure environment variables:**

   Create a `.env` file in `backend/` with the following:

   ```
   PORT=4001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_SECRET_KEY=your_cloudinary_api_secret
   GEMINI_API_KEY=your_google_gemini_api_key
   FRONTEND_URL=http://localhost:5173
   ```

3. **Start the backend server:**
   ```sh
   npm start
   ```

### Frontend Setup

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```

2. **Start the frontend dev server:**
   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

## Usage

- **Register** as a user or admin.
- **Login** to access your dashboard (admins only).
- **Create, update, or delete blogs** from the dashboard.
- **Generate blog content** using AI by entering a title and clicking "Generate About with AI".
- **Browse blogs** and creators from the main site.

## API Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login
- `GET /api/users/logout` - Logout
- `GET /api/users/my-profile` - Get current user profile
- `GET /api/users/admins` - List all admins
- `POST /api/blogs/create` - Create a blog (admin only)
- `PUT /api/blogs/update/:id` - Update a blog (admin only)
- `DELETE /api/blogs/delete/:id` - Delete a blog (admin only)
- `GET /api/blogs/all-blogs` - List all blogs
- `GET /api/blogs/single-blog/:id` - Get a single blog
- `GET /api/blogs/my-blog` - List blogs by current admin
- `POST /api/ai/generate` - Generate blog content with AI

## License

MIT

---

**Developed by Ashutosh Singh Rana**
