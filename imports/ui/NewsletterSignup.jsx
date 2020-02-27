import React, { Component } from 'react';

const styles = {
	displayNone: {
		display: 'none'
	},
	shifted: {
		position: 'absolute',
		left: '-5000px'
	}
};

export default class NewsletterSignup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			emailInput: "",
			firstInput: "",
			lastInput: "",
			websiteInput: ""
		}
	}

	chimpScripts() {
		jQuery.getScript("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js").done(function (script, textStatus) {
			console.log(textStatus);
			return (function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; }(jQuery)); var $mcj = jQuery.noConflict(true);
		}).fail(function (jqxhr, settings, exception) {
			console.log(exception);
			return;
		});
	}

	onChangeEmail(e) { this.setState({ emailInput: e.target.value }); }
	onChangeFirst(e) { this.setState({ firstInput: e.target.value }); }
	onChangeLast(e) { this.setState({ lastInput: e.target.value }); }
	onChangeWebsite(e) { this.setState({ websiteInput: e.target.value }); }

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-4 col-sm-offset-4">
						<div id="mc_embed_signup">
							<form action="//lionesquegroup.us2.list-manage.com/subscribe/post?u=7f945922913ffe39350251291&amp;id=718b834cf5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
								<div id="mc_embed_signup_scroll">
									<div className="mc-field-group">
										<label for="mce-EMAIL">Email Address </label>
										<input type="email" value={this.state.emailInput} name="EMAIL" className="form-control required email" id="mce-EMAIL" onChange={this.onChangeEmail}></input>
									</div>
									<div className="mc-field-group">
										<label for="mce-FNAME">First Name </label>
										<input type="text" value="" name="FNAME" className="form-control required firstName" id="mce-FNAME" onChange={this.onChangeFirst}></input>
									</div>
									<div className="mc-field-group">
										<label for="mce-LNAME">Last Name </label>
										<input type="text" value="" name="LNAME" className="form-control" id="mce-LNAME" onChange={this.onChangeLast}></input>
									</div>
									<div className="mc-field-group">
										<label for="mce-MMERGE3">Website </label>
										<input type="url" value="" name="MMERGE3" className="form-control website" id="mce-MMERGE3" onChange={this.onChangeWebsite}></input>
									</div>
									<div id="mce-responses" className="clear">
										<div className="response" id="mce-error-response" style={styles.displayNone}></div>
										<div className="response" id="mce-success-response" style={styles.displayNone}></div>
									</div>
									<div style={styles.shifted} aria-hidden="true"><input type="text" name="b_7f945922913ffe39350251291_718b834cf5" tabindex="-1" value=""></input></div>
									<div className="clear">
										<input type="submit" value="Subscribe" name="subscribe" className="btn btn-primary"></input>
									</div>
								</div>
							</form>
						</div>
						{this.chimpScripts()}
					</div>
				</div>
			</div>
		);
	}
}