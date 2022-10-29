import { h } from 'preact';
import style from '../base.css';

const About = () => (
	<div class={style.home}>
		<h1>About</h1>

		This is a basic PvP battle royale that uses Trustless Websockets.

		<h2>What is a Trustless Websocket?</h2>

		<p>
			Trustless sockets is <strong>monetization tool</strong> for multiplayer game developers. <br />
			With cash bets for players, it makes the games more exciting and opens a new revenue stream.
		</p>

		<h3>Problem</h3>

		<p>Blockchain is too slow for fast state updates. Building our multiplayer on-chain game - <a href="https://redline.game">Redline</a>, we found that building trustless on chain games is really difficult if at all possible.</p>

		<h3>Solution</h3>

		<p>Have trustless websockets that run main game logic in Cairo and hence the execution is provable and verifiable.</p>

		<h3>Target market</h3>

		<p>There could be many applications, but initially we want to target multiplayer games with bets.</p>
	</div>
);

export default About;
