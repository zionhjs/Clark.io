import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'

const styles = {
  typeForm: {
  	width: '100%',
  	height: 'calc(100vh)'
  }
};
 
export default class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}	
	}

	ownerClick() {
		return ga('send', 'event', 'form-engagement', 'click', 'Property Owner Signup Begun', value, {'NonInteraction': false});
	}

	brandClick() {
		return ga('send', 'event', 'form-engagement', 'click', 'Brand Signup Begun', value, {'NonInteraction': false});
	}

    render() {
        return(
        	<div id="signupPage" className="contentContainer container">
	        	<Header />

	        	<div className="row">
		            <div className="col-sm-8 col-sm-offset-2">
		            	<blockquote>"Brick and mortar is still an important touch-point regardless of where the customer buys"</blockquote>
		            	<p>— Melissa Gonzalez, The Pop-up Paradigm</p>
		            	<h1 className="">Are you a Brand or a Property Owner?</h1>
		            	<div className="container-fluid">
		            		<div className="row">
		            			<Link to="/owner-signup" className="col-sm-6" onClick={this.ownerClick}>
					            	<div className="btn-big">
					            		<h1 className="huge"><i className="btl bt-building"></i></h1>
					            		<h4>Property Owner</h4>
					            	</div>
				            	</Link>
				            	<Link to="/brand-signup" className="col-sm-6" onClick={this.brandClick}>
					            	<div className="btn-big">
					            		<h1 className="huge"><i className="btl bt-home"></i></h1>
					            		<h4>Brand</h4>
					            	</div>
				            	</Link>
			            	</div>
		            	</div>
		            </div>
	            </div>

	            <Footer />
            </div>
        );
    }
}
