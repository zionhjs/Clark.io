import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";

import { config as CONFIG } from "config/config";
import { setDataLayerInfo } from "../bouquetHelpers";
import Grid from "components/Grid";
import BouquetCover from "./BouquetCover";
import Footer from "../../discover/components/footer/Footer";

/* Index of the bouquet view, handle the enter animation */

const animationSettings = {
  enterTimer: 0.5 /* enter translate duration (s) */,
  outTimer: 0.5 /* out translate duration (s) */,
  duration: 2000 /* duration between translates (ms) */
};

const Container = styled.div`
  padding-top: 30px;
  transition: ${animationSettings.outTimer}s ease;
  transform: translate3d(0px, 0px, 0px);
  ${props =>
    props.inProgress &&
    `
      transition: ${animationSettings.enterTimer}s ease;
      background-color: rgba(11, 15, 25, 0.9);
      transform: translate3d(0px, -18vh, 0px);
      min-height: 50vh;
    `};
`;

class Bouquet extends Component {
  constructor(props) {
    super(props);
    const { userStatus, animationTriggeredTimes } = this.props.bouquet;

    /*
    *   Check if animation must trigger
    *   It happens the first CONFIG.BOUQUET_ANIMATIONS_REPEAT_NUMBER times
    *   if user is not connected or not subscribed
    */
    const mustTrigger =
      userStatus === "prospect" &&
      animationTriggeredTimes < CONFIG.BOUQUET_ANIMATIONS_REPEAT_NUMBER;

    this.state = {
      triggerAnimation: mustTrigger,
      inProgress: false,
      animationEnded: !mustTrigger /* if mustTrigger is false, directly set animationEnded to true */
    };
  }

  componentDidMount() {
    /* ANIMATION TRIGGER */
    if (this.state.triggerAnimation) {
      /* Increment animationTriggeredTimes in redux store */
      this.props.triggerAnimation();

      /*
      *   Handle the state changes on different timeout
      *   that will impacts on css properties creating the enter animation
      */
      setTimeout(() => {
        this.setState({ inProgress: true });
      }, 1);
      setTimeout(() => {
        this.setState({ inProgress: false, animationEnded: true });
      }, animationSettings.duration);
    }
  }

  render() {
    console.debug("Bouquet > render");
    const { bouquet, intl } = this.props;

    /* Fill Google Tag Manager dataLayer */
    setDataLayerInfo(bouquet);

    return (
      <div>
        {/* Cover Part */}
        <BouquetCover bouquet={bouquet} />

        {/* Logos Block Part (translate upper while inProgress is true) */}
        {bouquet.channelItems && (
          <Container inProgress={this.state.inProgress}>
            {/* Cards always appears in ZoomIn animation */}
            <Grid
              /* Title only appears once animationEnded is set to true */
              title={
                this.state.animationEnded &&
                intl.formatMessage(bouquet.channelItems.title)
              }
              items={bouquet.channelItems.items}
              animateTitle={this.state.triggerAnimation}
              titleCenter
            />
          </Container>
        )}

        {/* Display reassurance Footer if user have a prospect status */}
        {bouquet.userStatus === "prospect" && <Footer />}
      </div>
    );
  }
}

export default injectIntl(Bouquet);
