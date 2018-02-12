import React from 'react';

// Import Spectacle Core tags
import { Slide, SlideSet, CodePane, List, ListItem } from 'spectacle';

import { TitleHeading, TitleHeading2 } from '../components';
import SubTitle from '../components/SubTitle';

const jsf =
  '[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+(![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+[+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]])()';

const equality = `!!null // -> false
null == false // -> false
`;

export default (
  <SlideSet>
    <Slide>
      <TitleHeading>Why it's bad, reason #8</TitleHeading>
      <TitleHeading2>The "type system" is ridiculous</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>How to make an alert dialog in JS</TitleHeading>
      <CodePane lang="javascript" source={jsf} theme="dark" />
      <SubTitle>(Yes, it actually works)</SubTitle>
    </Slide>
    <Slide>
      <SubTitle>Equality is fun!</SubTitle>
      <CodePane
        lang="javascript"
        source={"!!'false' ==  !!'true' // -> true"}
        theme="dark"
      />
      <CodePane
        lang="javascript"
        source={'NaN === NaN // -> false'}
        theme="dark"
      />
      <CodePane lang="javascript" source={'!![] // -> true'} theme="dark" />
      <CodePane lang="javascript" source={equality} theme="dark" />
    </Slide>
    <Slide bgColor="alternate">
      <TitleHeading2>Result: We have 2 great type systems</TitleHeading2>
    </Slide>
    <Slide>
      <TitleHeading>TypeScript and Flow</TitleHeading>
      <List>
        <ListItem>Strict nulls</ListItem>
        <ListItem>Advanced types</ListItem>
        <ListItem>Good type inference</ListItem>
        <ListItem>Competition forces them to improve</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
