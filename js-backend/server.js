import { Server } from "socket.io";

const io = new Server(5000, { cors: { origin: "*" } });

let players = [];


io.on("connection", (socket, data) => {
  // send a message to the client

  // receive a message from the client
  socket.on( 'player', ( player ) => {
    players.push( [player, socket] );
//    if ( players.length > 1 ) {
      new GameOn( players );
      players = [];
//    }
  });
});


class GameOn {
  players;
  gameState = {
    playerPos: [],
  };
  gameEvents = [];
  pendingEvents = [];

  gameRange = {
    x: 800,
    y: 450,
  }

  constructor( players ) {
    this.players = players;
    this.players.forEach( ([player, socket], id) => {
      this.listen( id, socket )
      this.initPlayerState( id );
    } );

    this.emit( 'players_data', players.map( ([player]) => player ) );
    this.emit( 'game_state', this.gameState );
  }

  initPlayerState( id ) {
    this.pendingEvents[id] = [];
    this.gameEvents[id] = [];
    this.gameState.playerPos[id] = [
      Math.floor( 64 + Math.random() * (this.gameRange.x - 128) ),
      Math.floor( 64 + Math.random() * (this.gameRange.y - 128) ),
    ]
  }

  emit( ev, msg ) {
    if ( typeof ev === 'string' ) {
      ev = [[ev, msg]];
    }
    this.players.forEach( ([_, socket]) => {
        ev.forEach( ([event, msg]) => {
          socket.emit( event, msg )
        } );
    } );
  }

  /**
   * Adds events to pending events array
   * @param id
   * @param socket
   */
  listen( id, socket ) {
    socket.on( 'input', input => {
      if ( typeof input === 'string' || ! input.length ) {
        this.pendingEvents[id].push( input );
      } else {
        this.pendingEvents[id].push( ...input );
      }
    } );
  }

  prepareState( input ) {
    const oldState = this.gameState;
  }

  start() {
//    this.emit( 'game_state', {} );
  }

  processState() {

  }
}