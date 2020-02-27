import React, { Component } from 'react';
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

	render() {
		return (
			<div className="container">
				<div className="copyright row-fluid">
					<div className="col-xs-12">
						<br></br>
						<Link to="/terms" className="text-center">Terms & Conditions</Link>
						<p className="text-center">All Rights Reserved © 2017, Field-Test LLC.</p>
						<p className="text-center">116 West 23rd Street New York NY 10011</p>
					</div>
				</div>
			</div>
		);
	}
}
