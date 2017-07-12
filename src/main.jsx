'use strict';
const React = require('react');
const ReactDOM = require('react-dom');

class RootComponent extends React.Component {
	render() {
		return (
			<div>Hello, Ellis &amp; Jen's World!</div>
		);
	}
}

ReactDOM.render(<RootComponent/>, document.querySelector('body'));
