import {h, Component} from 'preact';
import style from '../base.css';
import {connect, disconnect} from "get-starknet";

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
				!wallet?.isConnected ? this.renderConnectBtn() : this.renderGame()
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

	renderGame() {
		return <div>
			<h3>Ready to roll!</h3>
		</div>;
	}
};

export default Play;
