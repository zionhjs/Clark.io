import React from 'react';
import Transition from 'react-transition-group/Transition';

export default class Slidin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, className = '', duration = 300, component: Component = 'div' } = this.props;
    return (
      <Transition in={this.props.show} timeout={duration} exit={false} appear={true}>
        {(state) => (
          <Component className={className + ' ' + state} key={className + ' ' + state}>
            {children}
          </Component>
        )}
      </Transition>
    );
  }
};