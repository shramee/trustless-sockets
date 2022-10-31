import { Component } from "preact";
import { io } from "socket.io-client";
import { ws_url } from "../../conf";
import Render from "../../game/render";
import Loader from "../../game/loader";

export default class GameMaker extends Component {
  state = {};

  subscriptions = [];

  componentDidMount() {
    this.socket = io(ws_url);
    this.wsListen();
    this.wsEmit();
  }

  wsListen() {
    // Save player data for rendering
    this.socket.on("players_data", players =>
      this.setState( {players})
    );

    // Send state to all subscribed callbacks
    this.socket.on("game_state", (gameState) => {
      this.state.gameStarted || this.setState({ gameState, gameStarted: true });
      this.subscriptions.forEach((cb) => cb(gameState));
    });
  }

  wsEmit() {
    // Send player data to the server
    const { player } = this.props;
    this.socket.emit("player", player);
  }

  wsSubscribe(callback) {
    this.subscriptions.push(callback);
  }

  logInput(input) {
    this.input = input;
  }

  render() {
    const { player } = this.props;
    const { gameState, players, gameStarted } = this.state;

    return !gameStarted ? (
      <Loader {...{ player }} />
    ) : (
      <Render wsSubscribe={ cb => this.wsSubscribe(cb)} {...{ players, gameState }} />
    );
  }
}
