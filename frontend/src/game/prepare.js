import {characters} from '../conf';
export default function Prepare( {update, player, readyForGame} ) {

	const {char} = player;
	return <div className='nl3 nr3 flex items-center'>
		<div className="ph3 w-60 tc">
			<h3 className=''>Pick your character</h3>
			<p>
				Your character shoots projectiles at other characters, last one standing wins.
			</p>
			<div className="flex flex-wrap justify-center">
				{characters.map( char => <div
					onClick={e => { update( {char} ) }}
					className='w-20 ma2 pa1 ba bw1 b--black-10 pointer'>
					<img className='db' src={`assets/characters/${char}.png`} />
				</div>)}
			</div>
		</div>
		<div className="ph3 w-40 tc">

			{char && <div>
				<h5 className='mt3'>This is you</h5>
				<img className='mb4' src={`assets/characters/${char}.png`} />
			</div>}

			<h4 className='ma0 o-50 ttu'>Bet amount</h4>
			<h4 className='ma0'>0.002 Ether</h4>
			<button disabled={! char} className="btn-big mt4" onClick={e => readyForGame()}>Start game</button>
		</div>
	</div>
}