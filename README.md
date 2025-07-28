# MERN Task Manager App



A functional task management application built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to manage tasks with features like user authentication (JWT & Google OAuth), task creation, task arrangement using drag-and-drop, and much more.

![Task Manager App home](/images/home.png)
![Task Manager App signup](/images/singup.png)
![Task Manager App login](/images/login.png)
![Task Manager App taskdetail](/images/taskdetails.png)
![Task Manager App edittask](/images/taskedit.png)

## 🌟 Key Features

### 🔐 Secure Authentication
- User registration, login, and logout powered by **JWT (HttpOnly Cookies)** for robust protection against XSS.
- Integrated **Google OAuth** for seamless third-party login.

### 🗂️ Task Lifecycle Management
- Create, update, delete, and view tasks.
- Organize tasks using intuitive **drag-and-drop** between "To Do", "In Progress", and "Done" stages.

### 🛡️ Protected Routes
- Only authenticated users can access dashboard and task pages.
- Prevent access to login/signup if the user is already logged in.

### ⚡ Optimistic UI Updates
- Implemented with **React Query** to enable fast and reactive UI updates, backed by server-side caching.

### 📱 Responsive & Polished UI
- Built with **React Beautiful DnD**, **Flowbite-React**, and other modern UI libraries.
- Fully mobile-friendly layout and design.

---

## 🧰 Tech Stack

### 🔧 Backend
- **Node.js** v18.x
- **Express.js** v4.19.2
- **MongoDB** with **Mongoose**
- **JWT** for token-based authentication
- **Bcrypt.js** for secure password hashing
- **Cookie-Parser** for handling cookies

### 🎨 Frontend
- **React** v18.3.1
- **Redux Toolkit** for global state management
- **React Router** for client-side navigation
- **React Query** for server communication & cache
- **React Hook Form** with **Zod** for form validation
- **React Beautiful DnD** for drag-and-drop UI
- **Axios** for REST API interactions
- **Flowbite-React** for UI components
- **React Toastify** for user notifications

---

## 🌐 Live Demo

🚧 **Coming Soon**  
A live deployment link will be added shortly. Stay tuned!

---

## 📈 Future Enhancements

- **🖼️ User Avatars**: Profile image upload and display
- **🔔 Real-time Notifications**: Instant alerts for task updates or mentions
- **🎨 Enhanced UI/UX**: Further polish to match professional aesthetics
- **🌙 Dark Mode**: Theme toggle based on user preference

---

## 🤝 Contributing

Your contributions are always welcome! Here's how you can help:

- Fork this repo
- Submit issues for bugs or enhancements
- Open pull requests with your improvements

Let’s build something great together! 💡

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Author

**Swati Singh**  
[GitHub Profile →](https://github.com/Swati0228)

---

⭐️ *If you found this project helpful or inspiring, feel free to leave a star on GitHub. It really helps and means a lot!* 🌟






