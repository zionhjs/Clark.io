import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Waypoint from "react-waypoint";
import { RaisedButton, FontIcon } from 'material-ui';
import colors from "./../Colors";
import { fade, darken } from 'material-ui/utils/colorManipulator';

const propTypes = {};
const defaultProps = {};

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };
  }

  handleAnimate = () => this.setState({ animated: true });

  render() {
    const { colors, animated } = this.props;
    const Container = styled.div`
      background: url("/img/girl-smiling-white-background.jpg") no-repeat 440px 170px, white;
      background-size: contain;
      height: 60vh;
      width: auto;
      display: flex;
      padding: 0 10vw;
      position: relative;
    `;
    const Filter = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 60vh;
      /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#054a91+0,fffd82+100&0.66+0,0.33+0,0.66+100 */
      background: -moz-linear-gradient(-45deg, rgba(5,74,145,0.33) 0%, rgba(255,253,130,0.66) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(-45deg, rgba(5,74,145,0.33) 0%,rgba(255,253,130,0.66) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(135deg, rgba(5,74,145,0.33) 0%,rgba(255,253,130,0.66) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#54054a91', endColorstr='#a8fffd82',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    `
    const LeftContent = styled.div`
      width: 50%;
      position: relative;
    `;

    const Img = styled.img`
      position: absolute;
      height: 50vh;
      width: auto;
      right: 13%;
      top: 5vh;
    `;
    const Video = styled.video`
      position: absolute;  
      height: 35vh;
      right: 15%;
      top: 19%;
    `;
    const Gif = styled.img`
      position: absolute;
      width: auto;
      height: 50vh;
      right: 13%;
      top: 8.5%;
    `;
    const RightContent = styled.div`
      width: 50%;
      display: flex;
      align-items: center;
    `;
    const BigTitle = styled.div`
      animation-duration: 0.5s;
      animation-delay: 0s;
      text-align: left;
      letter-spacing: 1px;
      line-height: 0.91em;
      text-shadow: 1px 1px 0 fade(@blue, 25%);
      font-weight: 700;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 42px;
      color: ${colors.blue};
      padding-bottom: 20px;
    `;
    const Title = styled.div`
      animation-duration: 0.5s;
      animation-delay: 0s;
      text-align: left;
      font-size: 24px;
      color: ${colors.blue};
      padding-bottom: 20px;
    `;
    const Description = styled.div`
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      ${!animated && `transform: translate3d(200vw,0px,0px); `};
      text-align: left;
      font-size: 20px;
      color: white;
      padding-bottom: 20px;
    `;
    const ButtonWrapper = styled.div`
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      ${!animated && `transform: translate3d(200vw,0px,0px); `};
      display: flex;
    `;

    const Span = styled.span`
      color: ${colors.teal}
    `;

    return (
      <div>
        <Container>
          <Filter />
          {this.state.animated ? (
            <LeftContent className="animated fadeIn">
              <Img src="/img/iphone2.png" />
              {/*<Video autoPlay loop src="/img/howItWorks-cropped.mp4" type="video/mp4" />*/}
              <Gif src="/img/howItWorks.gif" />
            </LeftContent>)
            :
            null
          }
          <RightContent>
            <div>
              {this.state.animated ? (
                <div>
                  <BigTitle className="animated slideInRight">We Make Shopping <Span>Seamless</Span>.</BigTitle>
                  <Title className="animated slideInRight">Clark lets you review & purchase products you discovered in-store.</Title>
                  {/*<Description className="animated slideInRight">We make shopping seamless giving you instant handheld access to review & purchase products you discovered in-store</Description>*/}
                  <ButtonWrapper className="animated slideInRight">
                    <RaisedButton
                      icon={<FontIcon className="bts bt-arrow-right bt-xs" />}
                      labelPosition="before"
                      label="Try It Out"
                      href="https://clrk.me"
                      target="_blank"
                      secondary
                    />
                  </ButtonWrapper>
                </div>)
                : null}
            </div>
          </RightContent>
        </Container>
        <Waypoint
          scrollableAncestor={window}
          onEnter={this.handleAnimate}
        />
      </div>
    );
  }
}

HowItWorks.propTypes = propTypes;
HowItWorks.defaultProps = defaultProps;

export default HowItWorks;
