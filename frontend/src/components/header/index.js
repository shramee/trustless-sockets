import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = ( {route} ) => (

	<header class={style.header} id='masthead'>
		<h1>Trustless socket demo</h1>
		<nav>
			<a className={(route === '#' || route === '') && style.active} href="#">Home</a>
			<a className={(route === '#play') && style.active} href="#play">Play</a>
		</nav>
	</header>
);

export default Header;
