import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Waypoint from "react-waypoint";
// import MediaBarCard from "./MediaBarCard";

const propTypes = {};
const defaultProps = {};

class MediaBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };
  }

  handleAnimate = () => this.setState({ animated: true });

  _renderPress() {
    return (
      <div id="press" className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="flexRow row">
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="http://wgntv.com/2017/08/29/online-shopping-comes-to-life-at-water-tower-with-store-called-in-real-life/" title="WGN9 on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/wgn9.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"Online shopping comes to life at Water Tower Place"</p>
                </div>
              </a>
            </div>
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="http://www.chicagotribune.com/business/ct-water-tower-place-irl-concept-shop-0809-biz-20170808-story.html" title="Chicago Tribune on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/chicago-tribune.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"Chicago's Water Tower Place is getting a new take on the pop-up shop"</p>
                </div>
              </a>
            </div>
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="http://www.businessinsider.com/malls-are-getting-inventive-to-attract-shoppers-2017-8" title="Business Insider on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/business-insider.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"GGP [is] introducing physical pop-up shops for e-commerce pureplays in the hope of revolutionizing the in-mall shopping experience"</p>
                </div>
              </a>
            </div>
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="http://www.glossy.co/store-of-the-future/ggp-looks-to-revive-its-malls-with-interactive-concept-stores?utm_campaign=glossydis&utm_source=twitter&utm_medium=social" title="Glossy on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/glossy.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"We're offering [brands] a physical in-store experience that mimics or matches up with what they're used to on an e-commerce platform"</p>
                </div>
              </a>
            </div>
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="http://www.rfidjournal.com/articles/view?16495" title="RFID Journal on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/rfid-journal.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"The system, tracks the movement of customer traffic and enables shoppers to create wish lists of products they see in a temporary environment</p>
                </div>
              </a>
            </div>
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="http://www.retaildive.com/news/mall-operator-gives-online-retailers-a-spot-with-in-real-life-shop/448856/" title="Retail Dive on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/retail-dive.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"It's essentially a store that allows e-commerce retailers to serve mall customers"</p>
                </div>
              </a>
            </div>
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="https://cheddar.com/videos/shop-online-experience-in-store" title="Cheddar on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/cheddar.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"New frontier in retail [IRL] allows customers to shop their favorite online brands while still being able to experience them in person"</p>
                </div>
              </a>
            </div>
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="https://www.impinj.com/library/blog/irl-creates-in-store-shopping-experiences-for-ecommerce-retailers/" title="Impinj on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/impinj.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"Field-Test uses RAIN RFID and the Impinj platform to create a digital shopping experience that is, in fact, purely physical at IRL"</p>
                </div>
              </a>
            </div>
            <div className="pressBox animated zoomIn col-xs-6 col-sm-4 col-lg-3">
              <a className="card" href="http://www.hfndigital.com/news/home-products-pop-shop-chicago-offers-interactive-experience/" title="HFN on Field-Test" target="_blank">
                <img className="card-img-top" src="/img/press/hfn.jpg" alt=""></img>
                <div className="card-block">
                  <p className="card-text">"IRL is using interactive and RFID technology to provide necessary product information to shoppers as well as to gather consumer data for participating brands"</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { colors } = this.props;
    const Container = styled.div`
      padding: 5vw 10vw;
      display: flex;
      flex-direction: column;
    `;
    const MediaBarTitle = styled.div`
      color: ${colors.blue};
      font-size: 25px;
      font-weight: 900;
      padding-bottom: 20px;
    `;
    const Grid = styled.div`
      display: flex;
      flex-wrap: wrap;
      width: 80vw;
      justify-content: center;
    `;

    return (
      <Container>
        <h2>What Are People Saying? <span>Good Stuff.</span></h2>
        {/*<MediaBarTitle>
          What People Are Saying
        </MediaBarTitle>*/}
        {this._renderPress()}
        {/*<div style={{ clear: 'both' }}>
          <Waypoint
            scrollableAncestor={window}
            onEnter={this.handleAnimate}
          />
        </div>*/}
      </Container>
    );
  }
}

MediaBar.propTypes = propTypes;
MediaBar.defaultProps = defaultProps;

export default MediaBar;
