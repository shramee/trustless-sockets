import {characters} from '../conf';

export default function Loader( { player } ) {
	const {char} = player;
	const charI = characters?.indexOf( char );
	console.log( charI );
	const prev = characters[(charI + 1) % characters.length];
	const next = characters[(charI + 2) % characters.length];
	return <>
		{char && <div className='bouncing-loader tc center'>
			<img className='bounce-infinite' src={`assets/characters/${prev}.png`}/>
			<img className='bounce-infinite' src={`assets/characters/${char}.png`}/>
			<img className='bounce-infinite' src={`assets/characters/${next}.png`}/>
		</div>}
		<h3>That's all for now, wait until further dev 🛠️</h3>
	</>;
}