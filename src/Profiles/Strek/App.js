import React from 'react';
import Github from '../../Components/ProfileComponent/Github';
import Stackoverflow from '../../Components/ProfileComponent/Stackoverflow';
import ProgressBar from '../../Components/ProfileComponent/ProgressBar/ProgressBar';
import RadialProgress from '../../Components/ProfileComponent/RadialProgress/RadialProgress';

export const StrekHome = () => (
  <div>
    <Github show="true" username="harish-sethuraman" showRepo />
    <Stackoverflow show="true" userid="8780399" />
    <ProgressBar type="sparkle" text="Hindi" level="50" />
    <RadialProgress text="new" color="red" level="14" />
    <RadialProgress text="new" color="blue" level="14" />
  </div>
);
export const StrekName = () => 'harish';
