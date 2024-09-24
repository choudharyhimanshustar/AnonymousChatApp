# Real-Time Chat Application using WebSockets

## Project Overview
This is a real-time chat application that allows multiple users to communicate instantly using WebSockets. The application includes a backend WebSocket server and a React-based frontend. Users can send messages, and they are delivered in real-time to all connected clients.

## Features
- **Real-time messaging**: Instant communication between clients.
- **Dynamic message display**: Messages are shown in the chat window as soon as they are received.
- **Auto-scroll to latest message**: The chat window scrolls automatically to the newest message.
- **Simple UI**: Clean and responsive interface built with React.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, WebSocket API
- **Styling**: CSS
- **Icons**: react-icons library

## How It Works
- The WebSocket server manages connections and broadcasts messages to all connected clients.
- Each client opens a WebSocket connection upon loading the app, allowing real-time two-way communication.
- When a message is sent from one client, it is forwarded to all other clients.
- The frontend dynamically updates the message list and scrolls to the latest message.

## Installation and Setup

### Backend Setup
1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone 
   cd chatApp
2. Install dependencies:
   ```bash
   npm install
3. Start the WebSocket server:
   ```bash
   npm start

### FrontEnd Setup
1. Navigate to the frontend folder:
   ```bash
   cd chatappclient
2. Install dependencies:
   ```bash
   npm install
3. Run the React App
   ```bash
   npm start

