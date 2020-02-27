import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  Divider, RaisedButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui';

import colors from '../Colors';
import MediaQuery from 'react-responsive';
import Contact from '../home/Contact.js';
import SimpleBarChart from '../SimpleBarChart.jsx';
import SimpleStraightAnglePieChart from '../SimpleStraightAnglePieChart.jsx';

const Container = styled.div`
  width: 100vw;
  padding-top: 100px;
`;
const HowItWorks = styled.div`
  padding: 30px 0px 75px;
  margin: 0;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#054a91+0,fffd82+100&0.66+0,0.33+0,0.66+100 */
  background: -moz-linear-gradient(-45deg, rgba(5,74,145,0.33) 0%, rgba(255,253,130,0.66) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(5,74,145,0.33) 0%,rgba(255,253,130,0.66) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(5,74,145,0.33) 0%,rgba(255,253,130,0.66) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#54054a91', endColorstr='#a8fffd82',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;
const Step = styled.div`
  margin: 0.66%;
  width: 32%;
  float: left;
`;
const StepMobile = styled.div`
  margin: 10px 0.66%;
  width: 100%;
`;
const Benefits = styled.div`
  width: 90vw;
  padding-left: 5vw;
`;
const BenefitsFooter = styled.div`
  display: flex;
  width: 90vw
`;
const BenefitsFooterItem = styled.div`
  width: 25vw;
  height: 25vw;
  padding: 2vw;
  border: 1px solid black;
`;
const Testimonials = styled.div`
  width: 90vw;
  padding-left: 5vw;
  display: flex;
`;

const propTypes = {};
const defaultProps = {};

const styles = {
  testimonialImg: {
    borderRadius: '50%',
  },
  testimonialText: {
    textAlign: 'left'
  }
}

// Maxwell
// {
//   core: true,
//   img: '/img/max.jpg',
//   name: 'Maxwell Nelson',
//   role: 'Software Engineer',
//   bio: `Former lead dev at Sesh.io, full-stack developer, and tech entrepreneur. Pianist and skateboarding fan.`
// },

const data = {
  steps: [
    {
      img: '/img/steps-1.jpg',
      title: 'Register Key',
      text: `A customer visits the Clark website and enters in their details to connect their key to their virtual wishlist.`
    },{
      img: '/img/steps-2.jpg',
      title: 'Saving Products',
      text: `Customers tap products "tap zones" and behind the scenes, Clark intelligently adds those product to each customer's virtual wishlist.`
    },{
      img: '/img/steps-3.jpg',
      title: `Huge Insights`,
      text: `Retailer see a dashboard with all their customers' carts, overall product performance, and can even engage with customers via SMS & email outreach.`
    }
  ],
  testimonials: [
    {
      img: 'img/erin-ggp.jpg',
      text: `
        "Having Field-Test at IRL has given us real hard-evidence around who visits and how long they say.
        It has brought us rich data what's driving traffic, what is driving dwell times and what customer's are looking to buy."
        <br />
        Erin McCarthy VP, Retail Development GGP Properties
      `
    }
  ],
  team: [
    {
      core: true,
      img: '/img/melissa.jpg',
      name: 'Melissa Gonzalez',
      role: 'CEO & Founder',
      bio: `Founder of The Lionesque Group. Author of <i>The Pop Up Paradigm:How Brands Can Build Human Connections in a Digital Age</i>. Licensed motorcyclist and scuba diver.`,
      bio2: `
        Before creating Clark, CEO Melissa Gonzalez founded The Lionesque Group,
        an award-winning agency of retail strategists who have helped brands such
        as Marc Jacobs and Estee Lauder rethink brick and mortar. She is the winner
        of Design: Retail’s 40 under 40 and Innovator of the Year by Retail Touchpoints.
      `
    },
    {
      core: true,
      img: '/img/aaron.jpg',
      name: 'Aaron Smulktis',
      role: 'CTO & Co-Founder',
      bio: `Former Apple design/dev, fin-tech marketing dir, full-stack developer. A boat captain who makes paintings.`
    },
    {
      core: true,
      img: '/img/gaby.jpg',
      name: 'Gabriela Castelao',
      role: 'Business Development',
      bio: `Operations Mgmt and Marketing experience. Former tech entrepreneurship & marketer at luxury brands. Loves skydiving and french fries.`
    },
    {
      core: false,
      img: '/img/larry.jpg',
      name: 'Larry Arnstein',
      role: 'Vice President of Solutions & Business Development',
      bio: `Former Vice President of Solutions and Business Development for RAIN RFID platform provider Impinj. Entrepreneur, academic, skier and player of the game of Ultimate.`
    },
    {
      core: false,
      img: '/img/ken.jpg',
      name: 'Ken Pilot',
      role: 'Founder of Pilot Consulting',
      bio: `Past president of The Gap, Ralph Lauren, American Eagle and Abc carpet & home. Former marathon runner with a personal best of 2:54.`
    },
    {
      core: false,
      img: '/img/eric.jpg',
      name: 'Eric Hertz',
      role: 'President, CRRE',
      bio: `10+ Years of Retail and Real Estate Education. Former SVP of Education and Certification at ICSC. Avid music fan and wanna-be guitarist.`
    },
  ]
}

class Retailers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _renderSteps() {
    return data.steps.map((item, index) => {
      return (
        <Step className="step">
          <Card className="noPadding">
            <CardMedia>
              <img className="step-1" src={item.img} title={item.title} />
            </CardMedia>
            <CardTitle title={item.title} />
            <CardText>
              {item.text}
            </CardText>
          </Card>
        </Step>
      );
    });
  }

  _renderStepsMobile() {
    return data.steps.map((item, index) => {
      return (
        <StepMobile className="step">
          <Card className="noPadding">
            <CardMedia>
              <img className="step-1" src={item.img} title={item.title} />
            </CardMedia>
            <CardTitle title={item.title} />
            <CardText>
              {item.text}
            </CardText>
          </Card>
        </StepMobile>
      );
    });
  }

  _renderTestimonials() {
    return data.testimonials.map((item, index) => {
      return (
        <div className="testimonial col-sm-10 col-sm-offset-1">
          <div className="col-sm-2 col-sm-offset-2">
            <MediaQuery query='(min-width: 768px)'>
              {/* You are a Desktop or Laptop */}
              <img src={item.img} style={styles.testimonialImg} />
            </MediaQuery>
            <MediaQuery query='(max-width: 767px)'>
              {/* You are a tablet or mobile phone */}
              <img src={item.img} style={{...styles.testimonialImg, maxWidth: '50%'}} />
            </MediaQuery>
          </div>
          <div className="col-sm-6">
            <p style={styles.testimonialText} dangerouslySetInnerHTML={{__html: item.text}}></p>
          </div>
        </div>
      );
    })
  }

  _renderTeam() {
    return data.team.map((person, index) => {
      return (
        <div className="teamBox animated zoomIn col-xs-6 col-sm-4 col-lg-4">
          <div className="card">
            <div className="card-img-container">
              <MediaQuery query='(min-width: 768px)'>
                {/* You are a Desktop or Laptop */}
                <img className="card-img-top" src={person.img} alt=""></img>
              </MediaQuery>
              <MediaQuery query='(max-width: 767px)'>
                {/* You are a tablet or mobile phone */}
                <img className="card-img-top" src={person.img} alt="" style={{width: '50%'}}></img>
              </MediaQuery>
            </div>
            <div className="card-block">
              <h4 className="card-title">{person.name}</h4>
              <h5>{person.role}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{__html: person.bio}}></p>
              {person.core ? null : <p><span className="badge">Advisor</span></p>}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {

    return (
      <div style={{paddingBottom: '15px 0px 60px'}}>
        <Container>
          <div className="row" style={{padding: '30px 15px 60px', margin: '0px', backgroundColor: 'white'}}>
            <h1 className="spacerV40">Revolutionize Your Customer's Experience</h1>
            <div className="col-sm-6 col-sm-offset-3">
              <p className="spacerV40">
                Clark empowers customers to seamlessly connect their in-store and online shopping experiences.
                By using a digital wireless personal shopping key given to consumers entering one of our Clark-enabled stores, in-store visitors can save products to a virtual wish list and
                purchase at their convenience.
              </p>
              <p>
                All while retailers gain powerful insights into the customer in-store journey, product interest and purchase intent.
              </p>
            </div>
          </div>

          <div className="row" style={{padding: '30px 15px 45px', margin: '0px'}}>
            <h3>The Customer Journey</h3>
            <div className="col-sm-8 col-sm-offset-2" style={{padding: '30px 0px'}}>
              <img src="/img/store-graphic.svg" />
            </div>
          </div>

          <Divider />

          <HowItWorks className="row">
            <h2>Surprisingly Simple</h2>
            <div className="col-sm-10 col-sm-offset-1" style={{padding: '30px 15px'}}>
              <MediaQuery query='(max-width: 768px)'>
                {this._renderStepsMobile()}
              </MediaQuery>
              <MediaQuery query='(min-width: 768px)'>
                {this._renderSteps()}
              </MediaQuery>
            </div>
          </HowItWorks>

          <div className="row" style={{padding: '30px 15px 60px', margin: '0px'}}>
            <h1>Real-time Insights Into The</h1>
            <h1><span>Real World</span></h1>
            <div className="col-sm-7 col-sm-offset-1">
              <img src="/img/summary-devices.png" />
            </div>
            <div className="col-sm-4">
              <ul style={{textAlign: 'left'}}>
                <li style={{marginTop: '20px'}}>
                  <img src="/img/bird-3.svg" style={{width: '50px', height: '50px', float: 'left', marginTop: '-20px', marginRight: '30px'}}></img>
                  <h4>Individual Shopper Journey</h4>
                </li>
                <div style={{clear: 'both'}}></div>
                <li style={{marginTop: '20px'}}>
                  <img src="/img/bird-2.svg" style={{width: '50px', height: '50px', float: 'left', marginTop: '-20px', marginRight: '30px'}}></img>
                  <h4>Dwell Times</h4>
                </li>
                <div style={{clear: 'both'}}></div>
                <li style={{marginTop: '20px'}}>
                  <img src="/img/bird-4.svg" style={{width: '50px', height: '50px', float: 'left', marginTop: '-20px', marginRight: '30px'}}></img>
                  <h4>Product Interest</h4>
                </li>
                <div style={{clear: 'both'}}></div>
                <li style={{marginTop: '20px'}}>
                  <img src="/img/bird-1.svg" style={{width: '50px', height: '50px', float: 'left', marginTop: '-20px', marginRight: '30px'}}></img>
                  <h4>Purchase Intent</h4>
                </li>
                <div style={{clear: 'both'}}></div>
              </ul>
            </div>
          </div>

          <div className="row testimonials" style={{padding: '90px 15px', margin: '0px', borderBottom: '1px solid lightgrey'}}>
            {this._renderTestimonials()}
          </div>

          <div id="team" className="row team" style={{padding: '30px 15px 60px', margin: '0px'}}>
            <h1>Meet the Team</h1>
            <div className="col-sm-10 col-sm-offset-1">
              <div className="flexRow row">
                {this._renderTeam()}
              </div>
            </div>
          </div>

          <Contact colors={this.props.colors} />
        </Container>
      </div>
    );
  }
}

Retailers.propTypes = propTypes;
Retailers.defaultProps = defaultProps;

export default Retailers;
