import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, Image, Layout, Fill, Text, Fit } from 'spectacle';

import { TitleHeading } from '../components';

import { hubspot } from '../assets';
import TitleHeading2 from '../components/TitleHeading2';

export default (
  <SlideSet>
    <Slide transition={['zoom']} bgColor="primary">
      <TitleHeading>JavaScript</TitleHeading>
      <TitleHeading2>It's so bad, it's awesome!</TitleHeading2>
      <Layout>
        <Fill>
          <Text
            textSize="1.5em"
            bold
            textColor="secondary"
            margin="58px auto auto auto"
          >
            Francois Ward
          </Text>
        </Fill>
        <Fill>
          <Image src={hubspot} height="2.1em" margin="50px 55px auto auto" />
        </Fill>
      </Layout>
      <Fit>
        <Text textSize="0.75em" bold textColor="secondary" margin="30px auto 0">
          Tech Lead of Front-end Infrastructure
        </Text>
        <Text textSize="0.75em" bold textColor="secondary">
          @FwardPhoenix
        </Text>
        <Text textSize="0.75em" bold textColor="secondary">
          fward@hubspot.com
        </Text>
      </Fit>
    </Slide>
    <Slide transition={['zoom']} bgColor="primary" />
  </SlideSet>
);
