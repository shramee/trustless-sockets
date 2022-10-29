import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Trustless socket demo</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Fight</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
		</nav>
	</header>
);

export default Header;
