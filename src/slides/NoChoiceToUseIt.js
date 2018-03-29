import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, List, ListItem } from 'spectacle';

import {
  TitleHeading,
  TitleHeading2,
  SubTitle,
  AppearItem,
} from '../components';

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #10</TitleHeading>
      <TitleHeading2>We have no choice but to use it</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>We're stuck</TitleHeading>
      <List>
        <AppearItem>We can't ignore the internet</AppearItem>
        <AppearItem>Everyone has a browser</AppearItem>
        <AppearItem>Browsers support JavaScript</AppearItem>
        <AppearItem>People won't install a plugin for you</AppearItem>
        <AppearItem>R.I.P Flash, Silverlight, Java Applets</AppearItem>
      </List>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: We made it run everywhere</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>Write once, run everywhere</TitleHeading>
      <SubTitle>(For real)</SubTitle>
      <List>
        <ListItem>Browsers (duh)</ListItem>
        <ListItem>Servers (Node.js)</ListItem>
        <ListItem>Desktop (Electron)</ListItem>
        <ListItem>The "cloud" (Lambda)</ListItem>
        <ListItem>CDN (Cloudflare workers)</ListItem>
        <ListItem>My TV (webOS)</ListItem>
        <ListItem>My editor (VSCode)</ListItem>
        <ListItem>And it's pretty fast!</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
