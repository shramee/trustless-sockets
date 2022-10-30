import { Server } from "socket.io";

const io = new Server(5000, { cors: { origin: "*" } });

const players = [];

io.on("connection", (socket, data) => {
  // send a message to the client
  socket.emit( 'players_data', {} );
  socket.emit( 'game_state', {} );

  // receive a message from the client
  socket.on( 'player', (...args) => {
    console.log("Client says...", args);
  });
});
