import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 14vw;
  height: 8vw;
  margin: 1vw 2vw;
  background: 
    ${props => props.hover ? null : `url(${props.img}) no-repeat center center;`};
  background-size: contain;
  border-radius: 5px;
  animation-duration: 1s;
  animation-delay: ${props => 0.3 + props.index * 0.2}s;
`;
const Text = styled.div`
  display:
    ${props => props.hover ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${colors.blue};
  font-size: 16px;
  animation-duration: 0.5s;
`;
const CustomLink = styled.div`
  text-decoration: none;
`;

const propTypes = {
  img: PropTypes.string,
  text: PropTypes.string
};
const defaultProps = {};

class MediaBarCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover = () => this.setState({ hover: true });
  handleLeave = () => this.setState({ hover: false });

  render() {
    return (
      <CustomLink target="_blank" href={this.props.link}>
      <Container 
        className="animated zoomIn"
        index={this.props.index}
        img={this.props.img}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
        hover={this.state.hover}
        onClick={this.openPage}
      >
        <Text className="animated fadeIn" hover={this.state.hover}>{this.props.text}</Text>
      </Container>
      </CustomLink>
    );
  }
}

MediaBarCard.propTypes = propTypes;
MediaBarCard.defaultProps = defaultProps;

export default MediaBarCard;
