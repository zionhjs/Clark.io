import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import sizeMe from 'react-sizeme';

import Cover from "./Cover";
import CoverFooter from "./CoverFooter";
import HowItWorks from "./HowItWorks";
import MediaBar from "./MediaBar";
import Contact from "./Contact";

const Container = styled.div`
  width: 100vw;
`;

const propTypes = {};
const defaultProps = {};

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { colors } = this.props;
    // console.log(colors);

    return (
      <Container>
        <Cover colors={colors} />

        <CoverFooter colors={colors} />

        <div id="how-it-works">
          <HowItWorks colors={colors} />
        </div>

        <div id="about" colors={colors} />

        <MediaBar colors={colors} />

        <Contact colors={colors} />
      </Container>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default sizeMe({ monitorWidth: true, monitorHeight: true })(Home);
