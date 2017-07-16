'use strict';
import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'

class RootComponent extends React.Component {
	render() {
		return (
			<div>
                <Header>Ellis &amp; Jen</Header>
				<Footer/>
			</div>
		);
	}
}

render(<RootComponent/>, document.querySelector('#app'));
