import React, { Component } from "react";
import styled from "styled-components";
import { RaisedButton, TextField } from 'material-ui';
import Rimp from 'rimp';
import axios from 'axios';
import Slidin from '../Slidin.js';

const defaultProps = {};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      emailForm: true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {    
    if(nextState.email != this.state.email) {  
      return false;  
    } else {
      return true;
    }
  }

  _emailForm() {
    if (this.state.emailForm) {
      return (
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <h2>
            Stay in the know as we power more retailers
          </h2>
          <TextField
            className="email"
            name="email"
            floatingLabelText="Email"
            value={this.state.email}
            ref="emailInput"
            type="email"
            required={true}
            onChange={this.handleEmail.bind(this)}
          />
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_f8eb694c0a3a074483eb49151_5e163e6344" tabIndex="-1" value=""></input>
          </div>
          <div className="clear"></div>
          <RaisedButton
            id="mc-embedded-subscribe"
            type="submit"
            label="Subscribe"
            name="subscribe"
            primary
          />
        </form>
      );
    } else {
      return (
        <Slidin show={true} className='signupThanks'>
          <h3>Thank you for signing up!</h3>
        </Slidin>
      );
    }
  }

  handleEmail(e) { this.setState({email: e.target.value}); }
  handleFormSubmit(e) {
    e.preventDefault();

    Meteor.call('subscribeUser', this.state.email, (err,res) => {
      if (err) { throw err } else {
        console.log('method worked: ', res);
        this.setState({emailForm: !this.state.emailForm}, () => {});
      }
    });
  }

  render() {
    const {colors} = this.props;
    const Container = styled.div`
      padding: 5vw;
      background-color: white
    `;
    const ContactTitle = styled.div`
      font-size: 25px;
      font-weight: 900;
      color: ${colors.blue};
      padding-bottom: 20px;
    `;

    return (
      <Container>
        
        {this._emailForm()}

        {/*This *just works* but the styling is just not as cool as material-ui*/}
        {/*<Rimp
          buttonValue={`Subscribe`}
          buttonStyles={`btn btn-primary`}
          containerStyles={`emailSignup`}
          completeMessage={`Thanks, we'll send you an email to confirm!`}
          mailChimpUrl="https://field-test.us18.list-manage.com/subscribe/post?u=f8eb694c0a3a074483eb49151&amp;id=5e163e6344"
         />*/}
      </Container>
    );
  }
}

Contact.defaultProps = defaultProps;

export default Contact;
