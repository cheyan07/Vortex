# Vortex 💬

Vortex is a real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. It was designed to make messaging feel fast, smooth, and engaging, with user authentication, user search, live conversations, protected pages, and chat-focused animations.

## 🚀 Features

* 🔐 User authentication with public and protected routes
* 💬 Real-time messaging powered by Socket.IO
* 👥 Search for other registered users
* 📩 Send and receive messages instantly
* 🕒 See new messages without refreshing the page
* 🟢 Animated online and offline presence indicators
* 🔄 Real-time connection and reconnection feedback
* 🍪 Authentication handled with HTTP-only cookies
* 🔒 Protected API endpoints with authentication middleware
* ⚡ REST APIs built with Express.js
* 🎨 Responsive React interface with modern MERN-inspired styling
* ❌ Custom 404 page for unknown routes
* 🛡️ Backend handling for invalid requests and unauthorized access

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Redux Toolkit
* Axios
* Tailwind CSS
* Socket.IO Client
* CSS transitions and keyframe animations

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT
* Cookie-based authentication

### MERN Architecture

Vortex follows the MERN stack architecture:

* **MongoDB** stores users and messages
* **Express.js** provides REST API routes
* **React** powers the animated frontend interface
* **Node.js** runs the backend server
* **Socket.IO** enables real-time communication between connected users

## 📁 Project Structure

```text
Vortex/
│
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── index.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── redux/
│   │   ├── animations/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
│
└── .gitignore
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/cheyan07/Vortex.git
cd Vortex
```

### 2. Install backend dependencies

```bash
cd Backend
npm install
```

### 3. Install frontend dependencies

Open a second terminal and run:

```bash
cd frontend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `Backend` directory.

Example:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

If the frontend needs environment variables, create a `.env` file inside the `frontend` directory as well.

The `.env.example` files contain the expected configuration details.

### 5. Start the backend

```bash
cd Backend
npm run dev
```

### 6. Start the frontend

```bash
cd frontend
npm start
```

Once both servers are running, open the application locally in your browser.

## 🔄 How It Works

Vortex uses REST APIs for standard application requests and Socket.IO for live communication.

```text
React Frontend
      │
      ├── REST API ────────► Express.js
      │                         │
      │                         └── MongoDB
      │
      └── Socket.IO ───────► Socket.IO Server
                                  │
                                  └── Real-time messages
```

The REST API manages authentication, users, and message-related actions. Socket.IO keeps connected users in sync so messages can be delivered immediately.

The frontend also listens for Socket.IO events to update the interface without refreshing the page. These updates can trigger message animations, unread-message indicators, typing states, and online-status changes.

## 🔐 Authentication

Vortex uses secure HTTP-only cookies for authentication.

Whenever a user accesses a protected resource, backend middleware checks whether the request belongs to an authenticated user. Since the cookie cannot be accessed directly through client-side JavaScript, it provides an additional layer of protection for authentication data.

Protected frontend pages can also display animated loading states while authentication is being verified, creating a smoother transition between the login screen and the main chat interface.

## 💬 Real-Time Messaging

Socket.IO maintains a connection between the frontend and backend while users are online.

When one user sends a message, it is passed through the server and delivered to the other user:

```text
User A
   │
   │ Socket.IO
   ▼
Server
   │
   │ Socket.IO
   ▼
User B
```

Because of this connection, new messages appear immediately without requiring a page refresh.

The Socket.IO connection can also support real-time events such as:

* New messages
* Typing indicators
* Online and offline status
* Message notifications
* Conversation updates
* Connection and reconnection states

When these events arrive, the React interface can update the relevant components and play a short, smooth animation to make the change clear to the user.

## 🧪 Error Handling

The application handles several common API and routing problems, including:

* Unauthorized requests (`401`)
* Invalid API requests
* Invalid routes
* Missing resources
* Authentication failures
* Socket.IO connection interruptions
* Reconnection attempts

If someone visits a frontend route that does not exist, Vortex displays a custom **404 Page Not Found** screen with a friendly animated transition.

## 👨‍💻 Author

**Chetan Patil**

GitHub: [@cheyan07](https://github.com/cheyan07)

---

⭐ If you like the project, consider giving the repository a star.
