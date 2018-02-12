import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2 } from '../components';
import SubTitle from '../components/SubTitle';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #7</TitleHeading>
      <TitleHeading2>Bikeshedding, bikeshedding EVERYWHERE</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>There's no official styleguide</TitleHeading>
      <SubTitle>No company "owns" JavaScript</SubTitle>
    </Slide>
    <Slide>
      <TitleHeading>And StandardJS isn't standard</TitleHeading>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: Prettier is amazing</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>Let's just forget about it</TitleHeading>
      <List>
        <ListItem>Automatically formats your code</ListItem>
        <ListItem>So awesome, it's not just for js</ListItem>
        <ListItem>Fewer options is better</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
