# 🛍️ BEAUShop – Modern E-Commerce Web App

**BEAUShop** is a stylish and fully responsive e-commerce application built with **React**, **Node.js**, **Express**, and **MongoDB**. Users can browse and purchase fashion products, while admins can manage inventory through a dedicated admin panel.

---

## 🌐 Live Demo

| Platform     | Link                                                                 |
|--------------|----------------------------------------------------------------------|
| 🛍️ Frontend (GitHub Pages)  | [BEAUShop Storefront](https://uynvu078.github.io/BEAUShop/) |
| 🔧 Backend (Render)   | [Express API](https://beaushop.onrender.com)               |
| 🛠️ Admin Panel (Netlify) | [Admin Dashboard](https://beauadminpanel.netlify.app)       |

---

## ⚙️ Installation & Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/uynvu078/BEAUShop.git
cd BEAUShop
```

---

### 2. Backend Setup (`/backend`)

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=4000
MONGO_URI=mongodb+srv://<your-mongodb-uri>
BACKEND_URL=https://beaushop.onrender.com
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend:

```bash
npm start
```

---

### 3. Frontend Setup (`/frontend`)

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend`:

```env
REACT_APP_BACKEND_URL=https://beaushop.onrender.com
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
```

Run the frontend:

```bash
npm start
```

---

### 4. Admin Panel Setup (`/admin`)

```bash
cd admin
npm install
```

Create a `.env` file in `/admin`:

```env
VITE_BACKEND_URL=https://beaushop.onrender.com
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
```

Run the admin panel:

```bash
npm run dev
```

---

## 🚀 Deployment Guide

### Backend (Render)

1. Push `/backend` folder to GitHub.
2. Go to [Render](https://render.com/), create a new **Web Service**.
3. Connect your GitHub repo and set environment variables.
4. Deploy.

---

### Frontend (GitHub Pages)

1. In `/frontend/package.json`, add:

```json
"homepage": "https://uynvu078.github.io/BEAUShop"
```

2. Install deployment package:

```bash
npm install gh-pages --save-dev
```

3. Add scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:

```bash
npm run deploy
```

---

### Admin Panel (Netlify)

1. Push your full project (including `/admin`) to GitHub.
2. Go to [Netlify](https://netlify.com), create a new site.
3. Set:
   - **Base directory:** `admin`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist` (for Vite)
4. Add environment variable:
   ```
   VITE_BACKEND_URL = https://beaushop.onrender.com
   ```
5. Deploy 🎉

---

## ✨ Features

- User Authentication (Signup/Login)
- Add to Cart, View Cart, Checkout
- Stripe Payment Integration (Test Mode)
- Admin Dashboard to Add/Remove Products
- RESTful APIs with MongoDB
- Fully Responsive UI (Mobile-Friendly)

---

## 🧰 Tech Stack

| Frontend | Backend | Database | Deployment |
|----------|---------|----------|------------|
| React, Vite, CSS | Node.js, Express | MongoDB Atlas | GitHub Pages, Render, Netlify |

---

## 📬 Contact

**Email:** [uyenvu315@gmail.com](mailto:uyenvu315@gmail.com)  
**GitHub:** [@uynvu078](https://github.com/uynvu078)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

> _"BEAUShop is built with elegance, logic, and love. 🛍️"_  