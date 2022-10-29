import {Component} from "preact";
import {io} from "socket.io-client";
import {ws_url} from "../../conf";
import Render from '../../game/render';
import Loader from '../../game/loader';

export default class GameMaker extends Component {

	state = {
		players: [],
	};

	subscriptions = [];

	componentDidMount() {
		this.socket = io( ws_url );
		this.wsListen();
		this.wsEmit();
	}

	wsListen() {
		// Save player data for rendering
		this.socket.on( 'players_data', players => this.setState( players ) );

		// Send state to all subscribed callbacks
		this.socket.on( 'game_state', state => {
			this.state.gameStarted || this.setState( {gameStarted: true} )
			this.subscriptions.forEach( cb => cb( state ) );
		} );
	}

	wsEmit() {
		// Send player data to the server
		const {player} = this.state;
		this.socket.emit( 'player', player );

		//
	}

	wsSubscribe( callback ) {
		this.subscriptions.push( callback );
	}

	logInput( input ) {
		this.input = input;
	}

	render() {
		const {player} = this.props;
		const {gameStarted} = this.state;

		console.log( this.props );

		return ! gameStarted ?
			<Loader {...{player}}/> :
			<Render wsSubscribe={cb => this.wsSubscribe( cb )} {...{player}}/>;
	}
}