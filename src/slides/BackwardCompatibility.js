import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet } from 'spectacle';

import { TitleHeading, TitleHeading2 } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #5</TitleHeading>
      <TitleHeading2>We can't break backward compatibility</TitleHeading2>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: JavaScript engines are super fast</TitleHeading2>
    </Slide>
  </SlideSet>
);
