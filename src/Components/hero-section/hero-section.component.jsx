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

const renderLogos = (links) => links.map((link, i) => {
  const [brand, url] = link;

  const key = `link-${i}`;
  const href = url ? `${url}` : '#';

  return (
    <a key={key} href={href}>
      <Logo url={`/brands.svg#${brand}`} size="30" />
    </a>
  );
});

const HeroSection = ({
  height,
  background,
  shapeOpacity,
  name,
  title,
  description,
  links,
}) => (
  <Wrapper background={background} height={height}>
    <GlobalStyles />

    <Shape opacity={shapeOpacity} />

    <Section solo={!description}>
      <Text>Hello, I&apos;m</Text>
      <Heading uppercase>{name}</Heading>
      {title && <SubHeading uppercase>{title}</SubHeading>}
      <Button>Download Resume</Button>
      <LogoGroup size="30">{links && renderLogos(links)}</LogoGroup>
    </Section>

    {description && <Card>{description}</Card>}
  </Wrapper>
);

export default HeroSection;
