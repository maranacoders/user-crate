import React from 'react';

import {
  GlobalStyles,
  Wrapper,
  Shape,
  Heading,
  SubHeading,
  Logo,
  Button,
  Section,
  LogoGroup,
  Text,
  Card,
} from './hero-section.styles';

const HeroSection = ({
  name, title, description, links,
}) => (
  <Wrapper>
    <GlobalStyles />
    <Shape />

    <Section>
      <Text>Hello, I’m</Text>
      <Heading uppercase>{name}</Heading>
      <SubHeading uppercase>{title}</SubHeading>

      <Button>Download Resume</Button>

      <LogoGroup size="30">
        {links
          && links.map((link, i) => (
            <a key={`link-${i}`} href={link[1] ? `${link[1]}` : '#'}>
              <Logo url={`/brands.svg#${link[0]}`} size="30" />
            </a>
          ))}
      </LogoGroup>
    </Section>

    {description && <Card>{description}</Card>}
  </Wrapper>
);

export default HeroSection;
