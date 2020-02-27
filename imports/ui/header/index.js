import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import { FontIcon, RaisedButton, FlatButton } from 'material-ui';
import { fade, lighten, darken } from 'material-ui/utils/colorManipulator';
import { withRouter } from "react-router-dom";

const propTypes = {};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  /* Change oppacity onScroll */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.scrolled === false && window.scrollY !== 0) {
      this.setState({ scrolled: true });
    } else if (this.state.scrolled === true && window.scrollY === 0) {
      this.setState({ scrolled: false });
    }
  };

  render() {
    //TODO change this ugly thing, maybe use Jquery
    function animate(elem, style, unit, from, to, time, prop) {
      if (!elem) {
        return;
      }
      var start = new Date().getTime(),
        timer = setInterval(function () {
          var step = Math.min(1, (new Date().getTime() - start) / time);
          if (prop) {
            elem[style] = (from + step * (to - from)) + unit;
          } else {
            elem.style[style] = (from + step * (to - from)) + unit;
          }
          if (step === 1) {
            clearInterval(timer);
          }
        }, 30);
      if (prop) {
        elem[style] = from + unit;
      } else {
        elem.style[style] = from + unit;
      }
    }

    handleHowLink = () => {
      var target = document.getElementById("how-it-works");
      if (target) {
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop - 100, 500, true);
      } else {
        this.props.history.push('/');
        // animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop - 100, 500, true);
      }
    };

    const { colors } = this.props;

    const Container = styled.div`
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
    `;

    const Wrapper = styled.div`
      positon: relative;
      position: fixed;
      z-index: 1000;
      top: 0;
      width: 100vw;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      text-transform: uppercase;
      transition: height 1s ease, background-color 1s ease;
      color: #CD9671;
      box-shadow: ${props =>
        props.opaque ? `0 1px 3px ${fade(colors.blue, 0.12)}` : "transparent"};
      background-color: ${props =>
        props.opaque ? colors.whiteWash : "transparent"};
      height: ${props =>
        props.opaque ? "60px;" : "100px"};
    `;
    const LeftContent = styled.div`
      padding-left: 5vw 
      font-size: 30px;
    `;
    // const Logo = styled.img`
    //   width: ${props =>
    //     props.scrolled ? "10vw" : "6vw"};
    // `;
    const Logo = styled.img`
      width: ${props =>
        props.scrolled ? "100px" : "60px"};
    `;
    const LogoMobile = styled.img`
      width: ${props =>
        props.scrolled ? "80px" : "60px"};
    `;
    const RightContent = styled.div`
      padding-right: 5vw;
      display: flex;
    `;
    const ButtonWrapper = styled.div`
      padding-right: 15px;
    `;

    return (
      <Container>
        <Wrapper opaque={this.state.scrolled}>
          <LeftContent>
            <Link to="/">
              <MediaQuery query='(max-width: 768px)'>
                <LogoMobile src={this.state.scrolled ? "/img/logoHorizontal.svg" : "/img/logoVertical.svg"} scrolled={this.state.scrolled} />
              </MediaQuery>
              <MediaQuery query='(min-width: 768px)'>
                <Logo src={this.state.scrolled ? "/img/logoHorizontal.svg" : "/img/logoVertical.svg"} scrolled={this.state.scrolled} />
              </MediaQuery>
            </Link>
          </LeftContent>

          <RightContent>
            <ButtonWrapper>
              <MediaQuery query='(min-width: 768px)'>
                <FlatButton label="How It Works" onClick={handleHowLink} />
              </MediaQuery>
            </ButtonWrapper>
            <ButtonWrapper>
              <MediaQuery query='(max-width: 768px)'>
                <RaisedButton
                  href="https://clrk.me"
                  target="_blank"
                  icon={<FontIcon className="btb bt-angles-right bt-sm" />}
                  label="Cart"
                  labelPosition="before"
                  secondary
                />
              </MediaQuery>
              <MediaQuery query='(min-width: 768px)'>
                <RaisedButton
                  href="https://clrk.me"
                  target="_blank"
                  label="Connect to your Cart"
                  secondary
                />
              </MediaQuery>
            </ButtonWrapper>
            <ButtonWrapper>
              <Link to="/retailers">
                <MediaQuery query='(max-width: 768px)'>
                  <RaisedButton label="Retailers" primary />
                </MediaQuery>
                <MediaQuery query='(min-width: 768px)'>
                  <RaisedButton label="For Retailers" primary />
                </MediaQuery>
              </Link>
            </ButtonWrapper>
          </RightContent>
        </Wrapper>
      </Container>
    );
  }
}

Header.propTypes = propTypes;

export default withRouter(Header);

