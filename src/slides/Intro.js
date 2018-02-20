import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, Image, Layout, Fill, Text, Fit } from 'spectacle';

import { TitleHeading, TitleHeading2 } from '../components';
import { hubspot, formula } from '../assets';
import SubTitle from '../components/SubTitle';

export default (
  <SlideSet>
    <Slide>
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
    <Slide>
      <TitleHeading>Let's start with some backstory</TitleHeading>
      <SubTitle>Why do I love JavaScript so much?</SubTitle>
    </Slide>
    <Slide>
      <TitleHeading>Universal truth</TitleHeading>
      <Layout>
        <Fill>
          <Image src={formula} />
        </Fill>
      </Layout>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Let the countdown begin!</TitleHeading2>
    </Slide>
  </SlideSet>
);
