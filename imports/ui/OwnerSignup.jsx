import React, { Component } from 'react';
import Header from './Header';
import Iframe from 'react-iframe';

const styles = {
  typeForm: {
  	width: '100%',
  	height: 'calc(100vh)',
  	left: 0
  }
};

export default class OwnerSignup extends Component {

	constructor(props) {
		super(props);
		this.state = {}
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
        	<div>
	        	<Header />
	        	<div className="container-fluid">
		        	<div className="row">
			            <div className="col-sm-12 noPadding">
							<Iframe id="typeform-full" display="initial" width="100%" height="100vh" frameborder="0" url="https://gaby164.typeform.com/to/IefXsD" styles={styles} allowFullScreen />
			            </div>
		            </div>
	            </div>
            </div>
        );
    }
}
