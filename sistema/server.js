const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const path = require('path');

// Rota para servir o arquivo HTML da página de votação
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


let votes = {
  option1: 0,
  option2: 0,
  option3: 0,
};

// Evento de conexão de um cliente
io.on("connection", (socket) => {
  console.log("Um cliente se conectou.");

  // Envia a contagem de votos atualizada para todos os clientes
  io.emit("updateVotes", votes);

  // Evento de voto recebido do cliente
  socket.on("vote", (option) => {
    if (votes.hasOwnProperty(option)) {
      votes[option]++;
      // Envia a contagem de votos atualizada para todos os clientes
      io.emit("updateVotes", votes);
    }
  });

  // Evento de desconexão de um cliente
  socket.on("disconnect", () => {
    console.log("Um cliente se desconectou.");
  });
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
