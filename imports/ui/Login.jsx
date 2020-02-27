import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import swal from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';
import Header from './Header';
import Footer from './Footer';

export default class OwnerSignup extends Component {

	constructor(props) {
		super(props);
		this._changeUser = this._changeUser.bind(this);
		this._changePass = this._changePass.bind(this);
		this._handleLogin = this._handleLogin.bind(this);
		this.state = {
			show: false,
			username: "",
			password: ""
		}
	}

	_changeUser(e) {
		e.preventDefault;
		this.setState({
			username: e.target.value
		})
	}

	_changePass(e) {
		e.preventDefault;
		this.setState({
			password: e.target.value
		})
	}

	_handleLogin(e) {
		e.preventDefault;
		let user = this.state.username;
		let pass = this.state.password;
		Meteor.loginWithPassword(user, pass, function (error) {
			if (error) {
				console.log(error);
				// this._showAlert();
				let cleanError = error.toString();
				cleanError = cleanError.replace("Error: ", "");
				cleanError = cleanError.replace("[403]", "");
				cleanError = cleanError.replace("[400]", "");
				cleanError = cleanError.slice(0, -1);
				swal(
					"Hmm...",
					"Something isn't right. " + cleanError + ".",
					"error"
				)
			}
			else {
				return
			}
		});
	}

	render() {
		return (
			<div>
				<Header />

				<div id="loginPage">
					<div className="loginBox">
						<p>Entering a world of intelligent retail.</p>
						<h3 className="text-center">Your Dashboard</h3>
						<form className="form loginForm">
							<div className="form-group">
								<input type="text" className="loginFormEffects form-control center-block" ref="loginUsername" placeholder="Username" value={this.state.username} onChange={this._changeUser} />
							</div>
							<div className="form-group">
								<input type="password" className="loginFormEffects form-control center-block" ref="loginPassword" placeholder="Password" value={this.state.password} onChange={this._changePass} />
							</div>
							<ul className="list-inline">
								<li><input type="button" className="btn btn-clear" value="Reset Password" onClick={this._handleLogin} /></li>
								<li><input type="button" className="btn btn-primary center-block" value="Login" onClick={this._handleLogin} /></li>
							</ul>
						</form>
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}
