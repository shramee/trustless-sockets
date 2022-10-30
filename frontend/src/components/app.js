import {h} from 'preact';
import Header from './header';
import Play from '../pages/play';
import About from '../pages/about';
import {useState} from "preact/hooks";

function CustomRouter( route ) {
	switch ( route ) {
		case '#play':
			return <Play />;
	}
	return <About/>
}

const locHash = () => typeof window !== 'undefined' ? window?.location.hash : '';

const App = () => {
	const [route, setRoute] = useState( locHash() )
	typeof addEventListener !== 'undefined' && addEventListener( 'hashchange', e => { setRoute( locHash() ) } );
	return <div id="app">
		<Header route={route} />
		{CustomRouter(route)}
	</div>;
}

export default App;
