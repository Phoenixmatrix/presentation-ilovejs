import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2, SubTitle } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #4</TitleHeading>
      <TitleHeading2>Lack of "classes" until ES6</TitleHeading2>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading>We have prototypes</TitleHeading>
      <SubTitle>They're really cool, but few know them</SubTitle>
    </Slide>
    <Slide>
      <TitleHeading>ES6 brought the sugar</TitleHeading>
      <SubTitle>Still incomplete though</SubTitle>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: FP to the masses</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>It's a gateway drug to FP</TitleHeading>
      <List>
        <ListItem>Think Redux (even if you don't like it)</ListItem>
        <ListItem>Immutability</ListItem>
        <ListItem>More powerful type systems</ListItem>
      </List>
    </Slide>
    <Slide>
      <TitleHeading>Bonus: a great module system</TitleHeading>
      <SubTitle>Much better than namespaces</SubTitle>
    </Slide>
  </SlideSet>
);
