import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const propTypes = {};
const defaultProps = {};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {colors} = this.props;
    const Container = styled.div`
      margin: 0 10vw;
      padding-top: 15px;
      padding-bottom: 15px;
    `;
    const ItemFooter = styled.div`
      color: black;
      padding-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
    `
    const Legals = styled.div`
      color: ${colors.blue};
      padding-bottom: 5px;
    `;
    return (
      <Container>
        <Link to="/faqs"><ItemFooter>FAQs</ItemFooter></Link>
        <Link to="/terms"><ItemFooter>Terms and Conditions</ItemFooter></Link>
        <p>All Rights Reserved © 2017, Field-Test LLC.</p>
        <p>116 West 23rd Street New York NY 10011</p>
      </Container>
    )
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
