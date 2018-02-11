import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet } from 'spectacle';

import { TitleHeading, TitleHeading2 } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #1</TitleHeading>
    </Slide>
    <Slide>
      <TitleHeading>(This one's my favorite)</TitleHeading>
    </Slide>
    <Slide>
      <TitleHeading>You can't hide your code</TitleHeading>
      <TitleHeading2>(In browsers at least)</TitleHeading2>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: Beginners can learn from real apps</TitleHeading2>
    </Slide>
  </SlideSet>
);
