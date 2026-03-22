# 🤖 AI Chatbot

A full-stack AI chatbot powered by **Groq API** (LLaMA 3.3 70B) with a React frontend and Node.js/Express backend.

## 📁 Project Structure

```
ai bot/
├── backend/      # Node.js + Express server
└── frontend/     # React + Vite app
```

## ⚡ Quick Start

### 1. Get a free Groq API key
Go to [https://console.groq.com](https://console.groq.com) → sign up → create an API key.

### 2. Set up the backend
```bash
cd backend
# Paste your Groq API key in .env
# GROQ_API_KEY=your_key_here
npm run dev
```
Server will start at **http://localhost:5000**

### 3. Set up the frontend
```bash
cd frontend
npm install   # if not already installed
npm run dev
```
App will open at **http://localhost:5173**

## 🛠 Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React 18 + Vite         |
| Backend   | Node.js + Express       |
| AI Model  | LLaMA 3.3 70B (via Groq)|
| Styling   | Vanilla CSS (dark theme)|

## ✨ Features
- Multi-turn conversation with full context
- Animated typing indicator
- Auto-resizing message input
- Keyboard shortcut (Enter to send)
- Clear chat button
- Error handling for invalid API keys
