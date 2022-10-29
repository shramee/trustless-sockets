import {h} from 'preact';
import Header from './header';
import Play from '../pages/play';
import About from '../pages/about';
import {useState} from "preact/hooks";

function CustomRouter( route ) {
	switch ( route ) {
		case '#play':
			return <Play/>
	}
	return <About/>
}

const App = () => {
	const [route, setRoute] = useState( window?.location.hash )
	addEventListener( 'hashchange', e => { setRoute( window?.location.hash ) } );
	return <div id="app">
		<Header route={route} />
		{CustomRouter(route)}
	</div>;
}

export default App;
