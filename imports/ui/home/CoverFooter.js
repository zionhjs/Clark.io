import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RaisedButton from 'material-ui/RaisedButton';

const propTypes = {};
const defaultProps = {};

class CoverFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {colors} = this.props;

    const Container = styled.div`
      height: 15vh;
      color: ${colors.blue};
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    const Flex = styled.div`
      animation-delay: 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    const Text = styled.div`
      letter-spacing: 1px;
      line-height: 0.91em;
      text-shadow: 1px 1px 0 fade(@blue, 25%);
      font-weight: 700;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 24px;
      padding-right: 10px;
    `;

    return (
      <Container>
        <Flex className="animated slideInUp">
          <Text>Already have a key?</Text> 
          <RaisedButton
            href="https://clrk.me"
            target="_blank"
            label="Connect to your Cart"
            secondary
          />
        </Flex>
      </Container>
    );
  }
}

CoverFooter.propTypes = propTypes;
CoverFooter.defaultProps = defaultProps;

export default CoverFooter;
