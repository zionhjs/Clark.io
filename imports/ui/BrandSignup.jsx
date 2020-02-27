import React, { Component } from 'react';
import Header from './Header.jsx';
import Iframe from 'react-iframe';

const styles = {
  typeForm: {
  	width: '100%',
  	height: 'calc(100vh)'
  }
};

export default class BrandSignup extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	typeForm() {
		(function(){
			var qs,js,q,s,d=document,
				gi=d.getElementById,
				ce=d.createElement,
				gt=d.getElementsByTagName,
				id='typef_orm',
				b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
			if(!gi.call(d,id)){js=ce.call(d,'script');
			js.id=id;js.src=b+'widget.js';
			q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()
	}

    render() {
        return(
          <body>
        	<div>
	        	<Header />
	        	<div className="container-fluid">
		        	<div className="row">
			            <div className="col-sm-12 noPadding">
							<div className="typeform-widget" data-url="https://gaby164.typeform.com/to/RV1rXB" data-text="Field-Test for Brands" style={styles.typeForm}></div>
							{this.typeForm()}
			            </div>
		            </div>
	            </div>
            </div>
          </body>
        );
    }
}
