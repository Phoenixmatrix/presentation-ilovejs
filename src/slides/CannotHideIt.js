import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List } from 'spectacle';

import {
  TitleHeading,
  TitleHeading2,
  AppearItem,
  SubTitle,
} from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #1</TitleHeading>
    </Slide>
    <Slide>
      <TitleHeading>(This one's my favorite)</TitleHeading>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading>(drumroll...)</TitleHeading>
    </Slide>
    <Slide>
      <TitleHeading>You can't hide your code</TitleHeading>
      <TitleHeading2>(In browsers at least)</TitleHeading2>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: Beginners can learn from real apps</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>Learning from real apps</TitleHeading>
      <SubTitle>Open source only does so much</SubTitle>
    </Slide>
    <Slide>
      <TitleHeading>Even when minified</TitleHeading>
      <SubTitle>People do publish their sourcemaps</SubTitle>
      <List>
        <AppearItem>Ecobee</AppearItem>
        <AppearItem>New Relic</AppearItem>
        <AppearItem>...Microsoft? YUP!</AppearItem>
      </List>
    </Slide>
  </SlideSet>
);
