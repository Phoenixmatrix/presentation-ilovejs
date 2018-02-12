import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2, SubTitle } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #6</TitleHeading>
      <TitleHeading2>Interpreted. No default toolchain</TitleHeading2>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading>Ok, I'm pushing it on that one</TitleHeading>
      <SubTitle>Not needing a build step is cool</SubTitle>
    </Slide>
    <Slide>
      <TitleHeading>But how do you...?</TitleHeading>
      <List>
        <ListItem>Bundle before publishing</ListItem>
        <ListItem>Optimize your code</ListItem>
        <ListItem>Do static analysis</ListItem>
        <ListItem>Check for errors</ListItem>
        <ListItem>Compile unsupported features</ListItem>
      </List>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: Build tools for everyone</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>And there are quite a few</TitleHeading>
      <List>
        <ListItem>Closure compiler</ListItem>
        <ListItem>Browserify</ListItem>
        <ListItem>Rollup</ListItem>
        <ListItem>Brunch</ListItem>
        <ListItem>Parcel</ListItem>
        <ListItem>Webpack (still my favorite!)</ListItem>
      </List>
    </Slide>
    <Slide>
      <TitleHeading>Not as scary as it sounds</TitleHeading>
      <SubTitle>Some of these handle EVERYTHING</SubTitle>
    </Slide>
  </SlideSet>
);
