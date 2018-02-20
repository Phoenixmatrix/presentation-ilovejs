import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2, SubTitle } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #3</TitleHeading>
      <TitleHeading2>No real standard library</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>We have the browser</TitleHeading>
      <SubTitle>Node.js adds a bit too</SubTitle>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>
        Result: The world's largest package registry
      </TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>NPM is awesome</TitleHeading>
      <List>
        <ListItem>We have Lodash and more</ListItem>
        <ListItem>640,000~ packages</ListItem>
        <ListItem>Take only what you want</ListItem>
        <ListItem>What's wrong with leftpad?</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
