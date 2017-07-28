'use strict';
import React from 'react';
import {navItems} from './utils/constants'
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/header.jsx'
import Section from './components/section/section.jsx'
import Footer from './components/footer/footer.jsx'


class RootComponent extends React.Component {

	render() {
		return (
			<div>
                <Header navItems={navItems}>Ellis &amp; Jen</Header>
                <Section sectionName='Home'></Section>
                <Section sectionName='About'></Section>
                <Section sectionName='Life'></Section>
                <Section sectionName='Work'></Section>
                <Section sectionName='Contact'></Section>
				<Footer/>
			</div>
		);
	}
}

render(<RootComponent/>, document.querySelector('#app'));
