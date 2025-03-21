# BEAUShop - E-Commerce Website

BEAUShop is a modern e-commerce web application where users can browse and purchase fashion items. This project includes a **React frontend** and a **Node.js/Express backend** with **MongoDB Atlas** as the database.

---

## 🚀 Live Demo
🔗 **Frontend:** [GitHub LiveDemo](https://uynvu078.github.io/BEAUShop/)  
🔗 **Backend:** [Render Deployment](https://beaushop.onrender.com)
🔗 **Admin:** [Admin Page](https://beaushop.onrender.com)

---

## 📂 Project Structure
```
BEAUShop/
│── frontend/          # React Frontend
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   ├── README.md
│
│── backend/           # Node.js Backend
│   ├── index.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── .env
│   ├── package.json
│
│── admin/             # Admin Panel
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   ├── README.md
│
│── README.md          
```

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/uynvu078/BEAUShop.git
cd BEAUShop
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```
#### **Set up `.env` file in `/backend` with:**
```env
PORT=4000
MONGO_URI=mongodb+srv://<your-mongodb-connection>
BACKEND_URL=https://beaushop.onrender.com
```
#### **Run the Backend:**
```sh
npm start
```

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install
```
#### **Set up `.env` file in `/frontend` with:**
```env
REACT_APP_BACKEND_URL=https://beaushop.onrender.com
```
#### **Run the Frontend:**
```sh
npm start
```

### **4️⃣ Admin Panel (Upload Products)**
To upload products using the admin panel, navigate to the admin folder and run:
```sh
cd admin
npm install
npm run dev
```

---

## 🚀 Deployment

### **Backend Deployment (Render)**
1. Push your backend code to GitHub.
2. Go to [Render](https://render.com/), create a new **Web Service**, and connect your repo.
3. Set up the environment variables (from `.env` file).
4. Deploy!

### **Frontend Deployment (GitHub Pages)**
1. Add this to `package.json` in `/frontend`:
   ```json
   "homepage": "https://your-github-username.github.io/your-repo-name"
   ```
2. Install `gh-pages`:
   ```sh
   npm install gh-pages --save-dev
   ```
3. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy to GitHub Pages:
   ```sh
   npm run deploy
   ```

---

## ✨ Features
- 🔥 User Authentication (Login/Signup)
- 🛒 Shopping Cart & Checkout
- 📦 Product Management (Admin Panel)
- 🌐 Fully Responsive UI
- 🚀 Backend API with MongoDB

---

## 👨‍💻 Technologies Used
- **Frontend:** React, React Router, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Deployment:** Render (Backend), GitHub Pages (Frontend)

---

## 📩 Contact
Have any questions? Feel free to reach out!
📧 **Email:** uyenvu315@gmail.com  
🔗 **GitHub:** [uynvu078](https://github.com/uynvu078)

---

💡 **Enjoy using BEAUShop! Happy Coding! 🚀**

