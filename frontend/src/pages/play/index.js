import {h, Component} from 'preact';
import {connect, disconnect} from "get-starknet";
import GameMaker from './gamemaker';
import Prepare from '../../game/prepare';

class Play extends Component {

	state = {
		player: {},
		fps: 20,
	};
	componentDidMount() {
		// Silent attempt to preconnect the wallet
		this.connectWallet( false )
	}

	connectWallet( showListModal ) {
		connect( {showList: showListModal} ).then( wallet => {
			const {player} = this.state;
			wallet
				?.enable( {showModal: showListModal} )
				.then( () => {
					this.setState( {
						wallet,
						player: {
							...player, addr: wallet.selectedAddress,
						}
					} );

				} );
		} );
	}

	render() {
		const {wallet} = this.state;

		return <div className='home'>
			{
				!wallet?.isConnected ?
					this.renderConnectBtn() :
					this.renderGameUI()
			}
		</div>
	}

	renderConnectBtn() {
		return <p className="tc center">
			<button className='btn-big' onClick={e => this.connectWallet( true )}>
				Connect wallet to continue
			</button>
		</p>;
	}

	renderGameUI() {
		const {player_ready} = this.state;
		return <>
			{!player_ready ?
				this.renderWalletReady() :
				this.renderGame()}
		</>;
	}

	async makeBetTransaction() {
		// Makes bet transaction and returns the transaction ID.

		return '0x7d3dc67c24_____DUMMY_TRANSACTION_____6b93c838ba5d3986255f7fefc8';
	}

	playerReady() {
		this.makeBetTransaction()
				.then( txn_id => {
					this.setState( { txn_id, player_ready: true } );
				} )
	}

	renderWalletReady() {
		const {player} = this.state;
		return <Prepare
			player={player} readyForGame={() => this.playerReady()}
			update={newData => this.setState( {player: {...player, ...newData}} )}
		/>;
	}

	renderGame() {
		const {player, txn_id} = this.state;
		return <GameMaker {...{player, txn_id}} />;
	}
}

export default Play;
