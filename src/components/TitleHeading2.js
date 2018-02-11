import React, { Component } from 'react';

import { Heading } from 'spectacle';

class TitleHeading extends Component {
  render() {
    return (
      <Heading size={1} fit caps textColor="tertiary">
        {this.props.children}
      </Heading>
    );
  }
}

export default TitleHeading;
