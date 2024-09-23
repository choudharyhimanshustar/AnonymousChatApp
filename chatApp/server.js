const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4000 });
wss.on("connection", (ws) => {
    console.log("Connected");
    ws.on("message", (message) => {
        console.log('Message Recieved', message.toString());
        console.log(`Number of connected clients: ${wss.clients.size}`);

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        })
    })

    ws.on("close", () => {
        console.log("Client Disconnected");
    })
});



