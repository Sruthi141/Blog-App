# 📝 Blog-App

A full-stack Blog Application where users can explore, read, and search blogs from various categories. Built using **React**, **Node.js**, **Express**, and **MongoDB**.

## 🚀 Features

- Responsive UI built with React and Bootstrap
- Blog listing with title, description, image, and category badge
- Integrated search bar to filter blogs
- Reusable components (Navbar, BlogCard, etc.)
- RESTful API with MongoDB via Mongoose
- Environment configuration using `.env`

## 🛠 Tech Stack

**Frontend:**
- React
- React Bootstrap
- React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv

## 📁 Project Structure

BLOG-APP/
├── client/ # Frontend (React)
│ ├── public/
│ ├── src/
│ │ ├── components/ # Navbar, Card etc.
│ │ ├── pages/ # Landing.jsx
│ │ ├── App.js
│ │ ├── index.js
│ │ └── Landing.css
│ └── package.json
├── server/ # Backend (Node + Express)
│ ├── models/ # Blog model
│ ├── routes/ # blogRoutes.js
│ ├── blog.model.js
│ ├── server.js
│ └── .env
├── .gitignore
└── README.md
### ⚙️ Prerequisites

- Node.js and npm
- MongoDB installed locally or use [MongoDB Atlas](https://www.mongodb.com/atlas)

## 📦 Backend Setup

```bash
cd server
npm install

