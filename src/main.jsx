'use strict';
import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class RootComponent extends React.Component {
	render() {
		return (
			<div>Hello, Ellis &amp; Jen's World!</div>
		);
	}
}

render(<RootComponent/>, document.querySelector('#app'));
