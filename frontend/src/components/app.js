import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Play from '../routes/play';
import About from '../routes/about';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<About path="/" />
			<Play path="/play" />
		</Router>
	</div>
)

export default App;
