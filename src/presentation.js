// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

import * as images from './assets';

import Intro from './slides/Intro';
import Attributions from './slides/Attributions';

// Require CSS
import 'normalize.css';

preloader(images);

const theme = createTheme(
  {
    primary: '#30455b',
    secondary: '#FFFFFF',
    tertiary: '#f37523',
    quartenary: '#415a75',
    alternate: '#000000',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {Intro}
        {Attributions}
      </Deck>
    );
  }
}
