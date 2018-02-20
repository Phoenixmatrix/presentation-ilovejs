import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2, SubTitle } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #2</TitleHeading>
      <TitleHeading2>It doesn't have threads***</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>Ok, there are implementations</TitleHeading>
      <SubTitle>And web workers, forked process and experiments...</SubTitle>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: almost all I/O is done async</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>More async than most</TitleHeading>
      <List>
        <ListItem>Accessible async I/O</ListItem>
        <ListItem>Promises, Observables, etc</ListItem>
        <ListItem>Async is the norm</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
