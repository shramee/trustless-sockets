import {h, Component} from 'preact';
import {connect, disconnect} from "get-starknet";
import Game from './game';
import Ready from './ready';

class Play extends Component {
	// silently attempt to connect with a pre-authorized wallet
	componentDidMount() {
		this.connectWallet( false )
	}

	connectWallet( showListModal ) {
		connect( {showList: showListModal} ).then( wallet => {
			wallet
				?.enable( {showModal: showListModal} )
				.then( () => {
					this.setState( {
						wallet,
						player: {
							addr: wallet.selectedAddress,
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
					this.renderWalletReady()
			}
		</div>
	}

	renderConnectBtn() {
		return <p className='tc' style={{marginTop: '25vh'}}>
			<button className='btn-big' onClick={e => this.connectWallet( true )}>
				Connect wallet to continue
			</button>
		</p>;
	}

	renderWalletReady() {
	}

	renderGame() {
	}
}

export default Play;
