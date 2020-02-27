import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MediaQuery from 'react-responsive';
import * as Colors from 'material-ui/styles/colors';
import { fade, lighten, darken } from 'material-ui/utils/colorManipulator';
import colors from '../Colors';

const propTypes = {};
const defaultProps = {};

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { colors } = this.props;
    // console.log(colors);
    const Container = styled.div`
      background: -moz-linear-gradient(-45deg, rgba(255,255,255,0.66) 0%, rgba(255,253,130,0.66) 100%), url("/img/woman-cart-grocery-iphone-2.jpg") no-repeat center center; /* FF3.6-15 */
      background: -webkit-linear-gradient(-45deg, rgba(255,255,255,0.66) 0%,rgba(255,253,130,0.66) 100%), url("/img/woman-cart-grocery-iphone-2.jpg") no-repeat center center; /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(135deg, rgba(255,255,255,0.66) 0%,rgba(255,253,130,0.66) 100%), url("/img/woman-cart-grocery-iphone-2.jpg") no-repeat center center; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00fffd82', endColorstr='#fffd82',GradientType=1 ), url("/img/woman-cart-grocery-iphone-2.jpg") no-repeat center center; /* IE6-9 fallback on horizontal gradient */

      background-size: cover;
      height: calc(100vh - 15vh);
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20vw 38vw 0 5vw;
    `;
    const TitleMobile = styled.div`
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 1px;
      line-height: 32px;
      padding: 30px 20px;
      text-align: left;
      text-shadow: 1px 1px 2px ${fade(colors.blue, 1)};
      color: ${colors.whiteWash};
      border-radius: 3px;
      background-color: ${fade(colors.blue, 0.88)};
    `;
    const Title = styled.div`
      font-family: 'Montserrat', sans-serif;
      font-size: 50px;
      font-weight: 900;
      letter-spacing: 1px;
      line-height: 52px;
      padding: 30px 20px;
      text-align: left;
      text-shadow: 1px 1px 2px ${fade(colors.blue, 1)};
      color: ${colors.whiteWash};
      border-radius: 3px;
      background-color: ${fade(colors.blue, 0.88)};
    `;

    const Span = styled.span`
      color: ${colors.yellow}
    `;

    return (
      <Container>
        <MediaQuery query='(max-width: 768px)'>
          <TitleMobile>Your <Span>wishlist in the sky</Span> for brick-and-mortar shopping</TitleMobile>
        </MediaQuery>
        <MediaQuery query='(min-width: 768px)'>
          <Title>Your <Span>wishlist in the sky</Span> for brick-and-mortar shopping</Title>
        </MediaQuery>
      </Container>
    )
  }
}

Cover.propTypes = propTypes;
Cover.defaultProps = defaultProps;

export default Cover;