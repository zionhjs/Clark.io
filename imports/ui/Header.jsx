import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

const styles = {
};

export default class Onboarding extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	_mainNav() {
		return (
			<div className="mainNav nav pull-left">
				<Link id="homeLink" to="/" className="pull-left"><h1 className="huge">Field-Test</h1></Link>
				<HashLink to="/#about" className="nav-item pull-left hidden-xs">About</HashLink>
				<HashLink to="/#how-it-works" className="nav-item pull-left hidden-xs">How It Works</HashLink>
				<HashLink to="/#team" className="nav-item pull-left hidden-xs">Who We Are</HashLink>
			</div>
		);
	}

	_mainLink() {
		let loggedInUser = LoginState.get('ft-dashboard');

		if (!loggedInUser) {
			return (
				<div className="mainLink pull-right">
					<Link to="/signup" className="btn btn-primary hidden-xs">Get Started</Link>
				</div>
			);
		} else if (loggedInUser) {
			return (
				<div className="mainLink pull-right">
					<Link to="/dashboard" component={() => window.location = 'https://app.field-test.co'} className="btn btn-primary">Dashboard</Link>
				</div>
			);
		} else {
			return;
		}
	}

	_loginLink() {
		let loggedInUser = LoginState.get('ft-dashboard');

		if (!loggedInUser) {
			return (
				<div className="pull-right">
					<a href="http://app.field-test.co" target="_blank" className="btn btn-accent">Log In</a>
				</div>
			);
		} else {
			let user = loggedInUser.username;
			return (
				<span>Hi, {user}</span>
			);
		}
	}

	render() {
		return (
			<div id="headerWrap">
				<nav className="nav navbar-default">
					<div className="container-fluid noPadding">
						<div className="col-sm-12 col-lg-12 col-lg-offset-0 noPadding">
							{/* <div className="pull-left">
							<a id="menuToggle" className="bm-burger-button btn btn-default"><i className="fa fa-navicon"></i> Menu</a>
							</div> */}

							{this._mainNav()}

							{this._loginLink()}
							{this._mainLink()}
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
