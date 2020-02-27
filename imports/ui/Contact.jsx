import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {TextField,RaisedButton} from 'material-ui';

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.onChangeFirst = this.onChangeFirst.bind(this)
    this.onChangeLast = this.onChangeLast.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeEmailSubject = this.onChangeEmailSubject.bind(this)
    this.onChangeEmailBody = this.onChangeEmailBody.bind(this)
    this.setState = this.setState.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.state = {
      firstInput: "",
      lastInput: "",
      emailSubjectInput: "",
      emailInput: "",
      emailBodyInput: ""
    }
    this._contactUs = this._contactUs.bind(this)
  }

  onChangeFirst(e){this.setState({firstInput: e.target.value});}
  onChangeLast(e){this.setState({lastInput: e.target.value});}
  onChangeEmail(e){this.setState({emailInput: e.target.value});}
  onChangeEmailSubject(e){this.setState({emailSubjectInput: e.target.value});}
  onChangeEmailBody(e){this.setState({emailBodyInput: e.target.value});}

  clearForm() { 
    this.contactForm.reset();
  }

  _contactUs(event) {
    //event.preventDefault();

    let first = this.state.firstInput ? this.state.firstInput.trim() : "";
    let last = this.state.lastInput ? this.state.lastInput.trim() : "";
    let subject = this.state.emailSubjectInput ? this.state.emailSubjectInput.trim() : "";
    let email = this.state.emailInput ? this.state.emailInput.trim() : "";
    let message = this.state.emailBodyInput ? this.state.emailBodyInput.trim() : "";

    function trimInput(val) {
       return val.replace(/^\s*|\s*$/g, "");
    }
    email = trimInput(email);

    function validateForm(a,b,c,d,e) {
      if (a==null || a=="" ||
          b==null || b=="" ||
          c==null || c=="" ||
          d==null || d=="" ||
          e==null || e=="") {
        return false;
      } else {
        return true;
      }
    }

    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (!validateForm(first,last,subject,email,message)) {
      console.log('nope');
      return sweetAlert({
        title: "Please fill out all required fields",
        text: "Please try again",
        showConfirmButton: true,
        type: "error"
      });
    } else if (!validateEmail(email)) {
      return sweetAlert({
        title: "Please use a valid email address",
        text: "Try again",
        showConfirmButton: true,
        type: "error"
      });
    } else {
      Meteor.call('sendEmail',
        "aaron@instinct.is",
        first + " " + last + "<" + email + ">",
        subject,
        message,
        message,
       function(error) {
        if (error) {
          console.log(error);
          return sweetAlert({
             title: "Hold up!",
             text: error,
             showConfirmButton: true,
             type: "error"
          });
        } else {
          return sweetAlert({
             title: "Thank you!",
             text: "We'll be in touch soon.",
             showConfirmButton: true,
             type: "info"
          }, function() {
            console.log('redirect NOW');
            // FlowRouter.go('/');
            // Clear form
            this.clearForm
          });
        }
      });
    }

    return false;
  }

  render() {
    const colors = this.props.colors;

    return (
      <div className="container">

        <form id="contactForm" className="col-sm-6 col-sm-offset-3" ref="contactForm">

          <TextField name="firstName" hintText="First Name" ref="firstInput" onChange={this.onChangeFirst} fullWidth={true} underlineFocusStyle={{borderColor:  colors.burntAmber}} inputStyle={{color: colors.denim}} floatingLabelStyle={{color:'#9C9C9C', fontWeight: 'normal'}} />
          <TextField name="lastName" hintText="Last Name" ref="lastInput" onChange={this.onChangeLast} fullWidth={true} underlineFocusStyle={{borderColor:  colors.burntAmber}} inputStyle={{color: colors.denim}} floatingLabelStyle={{color:'#9C9C9C', fontWeight: 'normal'}} />
          <TextField name="email" hintText="Email Address" ref="emailInput" onChange={this.onChangeEmail} fullWidth={true} underlineFocusStyle={{borderColor:  colors.burntAmber}} inputStyle={{color: colors.denim}} floatingLabelStyle={{color:'#9C9C9C', fontWeight: 'normal'}} />
          <TextField name="emailSubject" hintText="Subject" ref="emailSubjectInput" onChange={this.onChangeEmailSubject} fullWidth={true} underlineFocusStyle={{borderColor:  colors.burntAmber}} inputStyle={{color: colors.denim}} floatingLabelStyle={{color:'#9C9C9C', fontWeight: 'normal'}} />
          <TextField name="emailBody" hintText="Message Body" ref="emailBodyInput" onChange={this.onChangeEmailBody} fullWidth={true} underlineFocusStyle={{borderColor:  colors.burntAmber}} inputStyle={{color: colors.denim}} floatingLabelStyle={{textColor: colors.burntAmber, color:'#9C9C9C', fontWeight: 'normal'}} multiLine={true} />

          <a className="btn btn-primary" href="javascript:void(0);" onClick={this._contactUs.bind(this)} type="submit" title="Contact Field-Test">Send Message</a>

        </form>
      </div>
    );
  }
}