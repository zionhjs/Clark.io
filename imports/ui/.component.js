import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const propTypes = {};
const defaultProps = {};

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Container>EMPTY COMPONENT</Container>;
  }
}

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
