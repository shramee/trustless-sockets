import {h} from 'preact';

const About = () => (
	<div className='home'>
		<h1>About</h1>

		This is a demo implementation PvP game for Trustless websockets.
		Down the road, this frontend code will serve as a starter to easily add Trustless Websockets
		and wallet integration.

		<p>
			<a className='button' style={{marginRight: '.7em'}} href='#play'>
				Let me play the game!</a>
			or continue reading!
		</p>

		<h2>What is a Trustless Websocket?</h2>

		<p>
			Trustless sockets is <strong>monetization tool</strong> for multiplayer game developers. <br/>
			With cash bets for players, it makes the games more exciting and opens a new revenue stream.
		</p>

		<p>
			The technology is platform agnostic, the game renderer can be written in Unity, Unreal Engine, pure JS or any
			2d/3d framework for the web.
			As long as the platform allows connecting to websockets and a set of guidelines is followed the game execution
			will be provable and verifiable.
		</p>

		<h3>Problem</h3>

		<p>Blockchain is too slow for fast state updates. Building our multiplayer on-chain game - <a
			href="https://redline.game">Redline</a>, we found that building trustless on chain games is really difficult if at
			all possible.</p>

		<h3>Solution</h3>

		<p>Have trustless websockets that run main game logic in Cairo and hence the execution is provable and
			verifiable.</p>

		<h3>Target market</h3>

		<p>There could be many applications, but initially we want to <b>target multiplayer games with bets</b>.</p>
	</div>
);

export default About;
