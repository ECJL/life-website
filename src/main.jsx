'use strict';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';

import {navItems} from './utils/constants'
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/header.jsx'
import Section from './components/section/section.jsx'
import Footer from './components/footer/footer.jsx'

let store = createStore(reducer);

class RootComponent extends React.Component {
	render() {
		return (
			<Provider store={store}>
                <div>
                    <Header navItems={navItems}>Ellis &amp; Jen</Header>
                    <Section sectionName='Home'></Section>
                    <Section sectionName='About'></Section>
                    <Section sectionName='Life'></Section>
                    <Section sectionName='Work'></Section>
                    <Section sectionName='Contact'></Section>
                    <Footer/>
                </div>
			</Provider>
		);
	}
}

render(<RootComponent/>, document.querySelector('#app'));
