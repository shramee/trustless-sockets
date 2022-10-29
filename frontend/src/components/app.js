import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/play" />
			<About path="/" />
		</Router>
	</div>
)

export default App;
