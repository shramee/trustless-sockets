import {Component} from "preact";
import {characters} from "../conf";

export default class Render extends Component {
	p;
	ref;

	constructor( props ) {
		super( props );
	}

	imgs = [];

	charImg( player_id ) {
		return this.imgs[this.props.players[player_id].char];
	}

	componentDidMount() {
		new p5( ( p ) => {
			p.preload = () => {
				characters.forEach( char =>
					this.imgs[char] = p.loadImage( `assets/characters/${char}.png` )
				);
			}
			p.setup = () => {
				this.p5I = p;
				const canvas = p.createCanvas( 800, 450 );
				canvas.parent( this.ref );
				this.renderFrame( this.props.gameState );
				this.props.wsSubscribe( state => this.renderFrame( state ) );
			}

			p.keyPressed = () => {
				switch(key) {
					case 'ArrowLeft':
						player.move('left', true)
						break
					case 'ArrowUp':
						player.move('up', true)
						break
					case 'ArrowRight':
						player.move('right', true)
				}
		} );
	}

	renderFrame( state ) {
		const p = this.p5I
		p.background( 220 ) // Apply a rgb color (220, 220, 220) to the the background

		for ( let i = 0; i < state.playerPos.length; i ++ ) {
			const [x, y] = state.playerPos[i];
			p.image(this.charImg( i ), x, y);
		}


	}

	render() {
		return <div id='canvas-wrapper' ref={$ref => this.ref = $ref }/>;
	}
}