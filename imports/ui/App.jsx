import React, { Component, PropTypes } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Header from './header/';
import Home from './home/';

export default class App extends Component {
	render() {
		return (
			<Home />
		);
	}
}
