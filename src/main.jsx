'use strict';
import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/footer.jsx'

class RootComponent extends React.Component {
	render() {
		return (
			<div>Hello, Ellis &amp; Jen's World!
				<Footer/>
			</div>
		);
	}
}

render(<RootComponent/>, document.querySelector('#app'));
