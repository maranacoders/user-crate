import React from 'react';
import Github from '../../Components/ProfileComponent/Github';
import Stackoverflow from '../../Components/ProfileComponent/Stackoverflow';
import ProgressBar from '../../Components/ProfileComponent/ProgressBar/index';
import RadialProgress from '../../Components/ProfileComponent/RadialProgress/index';
import HeroSection from '../../Components/hero-section/hero-section.component';

const heroSectionData = {
  name: 'Harish Kumar',
  title: 'Creative Front-End Web Developer',
  // description:
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

  links: [
    ['github'],
    ['twitter'],
    ['linkedin'],
    ['facebook'],
    ['google', 'https://www.google.com/'],
  ],
};

export const StrekHome = () => (
  <div>
    <HeroSection {...heroSectionData} />
    <Github username="harish-sethuraman" showRepo />
    <Stackoverflow show="true" userid="8780399" />
    <ProgressBar type="aqua" text="HTML" level="90" />
    <ProgressBar type="copper" text="CSS" level="50" />
    <ProgressBar type="candy" text="CPP" level="50" />
    <ProgressBar type="neon" text="C" level="50" />
    <ProgressBar type="shine" text="React JS" level="50" />
    <ProgressBar type="zigzag" text="JS" level="50" />
    <ProgressBar type="diamond" text="English" level="50" />
    <ProgressBar type="hearts" text="Tamil" level="50" />
    <ProgressBar type="sparkle" text="Hindi" level="50" />
    <RadialProgress text="new" color="red" level="14" />
    <RadialProgress text="new" color="blue" level="14" />
    <RadialProgress text="new" level="14" />
  </div>
);
export const StrekName = () => 'harish';
