import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2, SubTitle } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #5</TitleHeading>
      <TitleHeading2>We can't break backward compatibility</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>There's WAY too many web pages to break</TitleHeading>
      <SubTitle>We're kind of stuck now</SubTitle>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: Lots of things, actually</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>I didn't know which one to pick</TitleHeading>
      <List>
        <ListItem>Your code won't break tomorrow</ListItem>
        <ListItem>JavaScript is a compile target</ListItem>
        <ListItem>JavaScript engines are now super fast</ListItem>
      </List>
      <SubTitle>WebAssembly will change this, but we're not there yet</SubTitle>
    </Slide>
  </SlideSet>
);
