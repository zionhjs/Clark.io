import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Paper, RaisedButton } from 'material-ui';

const propTypes = {};
const defaultProps = {};

const data = [
  {
    question: "I lost my key, how do I get a new one?",
    answer: "Contact us at (email) and we will have a new one shipped to you.",
  },
  {
    question: "Can I purchase from my wishlist?",
    answer: "It’s as simple as hitting the buy button! Right now you can purchase buy hitting buy and checking out directly on the retailers website. Coming Soon, we will have a universal cart check-out",
  },
]

class FAQs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Container = styled.div`
      width: 100vw;
      min-height: calc(100vh - 180px);
      padding: 10vw 10vw;
    `;
    const Header = styled.div`
      display: flex;
      justify-content: space-between;
    `
    const Logo = styled.a`
      width: 10vw;
    `
    const Title = styled.div`
      font-size: 30px;
      font-weight: bold;
      padding: 3vw 0;
    `;
    const Block = styled.div`
      padding-bottom: 30px;
    `;
    const Question = styled.div`
      color: ${colors.blue};
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 10px;
    `;
    const Answer = styled.div`
      color: ${colors.denim};
      padding: 20px;
      font-size: 18px;
      text-align: left;
    `;

    return (
      <Container>
        <Paper>
        <Title>FAQs</Title>
        {data.map((item, index) => {
          return (
            <Block id={index}>
              <Question>{item.question}</Question>
              <Answer>{item.answer}</Answer>
            </Block>
          )
        })}
        </Paper>
      </Container>
    );
  }
}

FAQs.propTypes = propTypes;
FAQs.defaultProps = defaultProps;

export default FAQs;
