# 📝 Blog Application

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
# 📝 Blog Application

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A dynamic and user-friendly blog platform built with React and Node.js, offering a seamless reading and writing experience.

[Features](#features) • [Installation](#installation) • [Prerequisites](#prerequisites) • [Environment Setup](#environment-setup) • [Running](#running-the-application)

</div>

---

## ✨ Features

- 🔐 Secure user authentication via Clerk
- ✍️ Create, edit, and delete blog posts
- 💬 Interactive comment system
- 🏷️ Categorized articles for easy navigation
- 📱 Fully responsive design
- 🤖 AI-powered chatbot assistant using Gemini API
- ⚡ Real-time content updates

## 🛠️ Prerequisites

Ensure you have the following installed:

- 📦 Node.js (v14 or higher)
- 🗄️ MongoDB
- 📥 npm or yarn

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd blog-application
```

### 2️⃣ Server Setup

```bash
cd server
npm install
```

#### Required Server Packages 🖥️

```bash
npm install @clerk/express cors dotenv express express-async-handler mongoose nodemon axios
```

### 3️⃣ Client Setup

```bash
cd ../client
npm install
```

#### Required Client Packages 🎨

```bash
npm install @clerk/clerk-react @material-tailwind/react axios lucide-react react react-dom react-hook-form react-router-dom tailwindcss
```

## ⚙️ Environment Setup

### Server Configuration

Create a `.env` file in the server directory:

```env
PORT=3000
DBURL=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
GEMINI_API_KEY=your_gemini_api_key
```

### Client Configuration

Create a `.env.local` file in the client directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## 🏃‍♂️ Running the Application

### 1. Start the Server

```bash
cd server
npm run dev
```

### 2. Start the Client

```bash
cd client
npm run dev
```

### Access Points 🌐

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## 📁 Project Structure

```
blog-application/
├── 📱 client/                # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # Context providers
│   │   ├── styles/        # CSS styles
│   │   └── App.jsx        # Main app component
│   └── package.json
│
└── 🖥️ server/               # Node.js backend
    ├── APIs/             # API routes
    ├── models/           # MongoDB models
    ├── server.js         # Server entry point
    └── package.json
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/NewFeature`)
3. 💾 Commit your changes (`git commit -m 'Added NewFeature'`)
4. 📤 Push to the branch (`git push origin feature/NewFeature`)
5. 🔄 Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by the Blog Application Team

</div>


 
 
