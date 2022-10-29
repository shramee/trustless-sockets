import {h, Component} from 'preact';
import style from '../base.css';
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
			wallet?.enable( {showModal: showListModal} )
						.then( () => this.setState( {wallet} ) );
		} );
	}

	render() {
		const {wallet} = this.state;

		return <div className={style.home}>
			{
				!wallet?.isConnected ?
					this.renderConnectBtn() :
					this.renderWalletReady()
			}
		</div>
	}

	renderConnectBtn() {
		return <p className='tc' style={{marginTop: '25vh'}}>
			<button className='button-huge' onClick={e => this.connectWallet( true )}>
				Connect wallet to continue
			</button>
		</p>;
	}

	renderWalletReady() {
		return <Ready state={this.state} updateState={newState => this.setState(newState)} />;
	}

	renderGame() {
		return <Game state={this.state} updateState={newState => this.setState(newState)} />;
	}
}

export default Play;
