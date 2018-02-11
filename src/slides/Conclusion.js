import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2 } from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Let's wrap up</TitleHeading>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>It's not perfect but...</TitleHeading2>
      <List>
        <ListItem>ES2015 made it better</ListItem>
        <ListItem>We're still stuck with it</ListItem>
        <ListItem>The community made it great</ListItem>
        <ListItem>It might feel like it's moving too fast</ListItem>
      </List>
    </Slide>
    <Slide>
      <TitleHeading>It's because people are solving problems.</TitleHeading>
      <TitleHeading2>That's what matters.</TitleHeading2>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Thank you!</TitleHeading2>
    </Slide>
  </SlideSet>
);
