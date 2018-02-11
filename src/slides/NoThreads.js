import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet } from 'spectacle';

import { TitleHeading, TitleHeading2 } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #2</TitleHeading>
      <TitleHeading2>It doesn't have threads***</TitleHeading2>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: almost all I/O is done async</TitleHeading2>
    </Slide>
  </SlideSet>
);
