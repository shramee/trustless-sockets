import {characters} from '../conf';

export default function Loader( { player } ) {
	const {char} = player;
	const charI = characters?.indexOf( char );
	const prev = characters[(charI + 1) % characters.length];
	const next = characters[(charI + 2) % characters.length];
	return <>
		{char && <div className='bouncing-loader tc center'>
			<img alt={prev} src={`assets/characters/${prev}.png`}/>
			<img alt={char} src={`assets/characters/${char}.png`}/>
			<img alt={next} src={`assets/characters/${next}.png`}/>
		</div>}
		<h3 className='tc'>You are in the lobby.️</h3>
	</>;
}