import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, CodePane, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2 } from '../components';
import SubTitle from '../components/SubTitle';

const somevar = `foo = 1;
foo = foo * 10;
console.log(foo);
// why would I need to declare
// my variables first?
var foo;
`;

const duplicate = `var foo = {
  bar: "baz",
  bar: "qux"
};

console.log(foo.bar);
`;

const manyfunctions = `function foo() {
  console.log('first');
}

function foo() {
  console.log('second');
}
`;

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #9</TitleHeading>
      <TitleHeading2>It's full of weird idioms</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>We all love us some var</TitleHeading>
      <CodePane lang="javascript" source={somevar} textSize="40" theme="dark" />
      <SubTitle>Because JavaScript</SubTitle>
    </Slide>
    <Slide>
      <TitleHeading>Who hasn't done this before?</TitleHeading>
      <CodePane lang="javascript" textSize="40" source={duplicate} theme="dark" />
      <SubTitle>JavaScript thinks that's okay</SubTitle>
    </Slide>
    <Slide>
      <TitleHeading>My function is so good</TitleHeading>
      <CodePane lang="javascript" textSize="40" source={manyfunctions} theme="dark" />
      <SubTitle>I implemented it twice</SubTitle>
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: We have ESLint</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>I forget what JavaScript allows</TitleHeading>
      <List>
        <ListItem>Only the good parts</ListItem>
        <ListItem>eslint:recommended and call it a day</ListItem>
        <ListItem>Editor agnostic</ListItem>
        <ListItem>Static analysis in a dynamic lang</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
