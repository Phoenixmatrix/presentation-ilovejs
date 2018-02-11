import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, Image } from 'spectacle';

import { TitleHeading } from '../components';

import { hubspot } from '../assets';

export default (
  <SlideSet>
    <Slide transition={['zoom']} bgColor="primary">
      <TitleHeading>Why I love JavaScript</TitleHeading>
      <Image src={hubspot} height="3em" />
    </Slide>
    <Slide transition={['zoom']} bgColor="primary" />
  </SlideSet>
);
