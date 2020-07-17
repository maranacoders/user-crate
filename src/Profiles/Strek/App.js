import React, { Component } from "react";
import Style from "../Strek/Strek.module.scss";
import Github_api from "../../Components/Github-api";
import Stackoverflow_api from "../../Components/Stackoverflow-api";
import ProgressBar from "../../Components/ProfileComponent/ProgressBar/ProgressBar";
import RadialProgress from '../../Components/ProfileComponent/RadialProgress/RadialProgress'

export const StrekHome = () => {
  return (
    <div>
      <Github_api show="true" username="harish-sethuraman" showRepo="true" />
      <Stackoverflow_api show="true" userid="8780399" />
        <ProgressBar type="aqua" text="HTML" level="90" />
      <ProgressBar type="copper" text="CSS" level="50" />
      <ProgressBar type="candy" text="CPP" level="50" />
      <ProgressBar type="neon" text="C" level="50" />
      <ProgressBar type="shine" text="React JS" level="50" />
      <ProgressBar type="zigzag" text="JS" level="50" />
      <ProgressBar type="diamond" text="English" level="50" />
      <ProgressBar type="hearts" text="Tamil" level="50" />
      <ProgressBar type="sparkle" text="Hindi" level="50" />
       <RadialProgress/>
    </div>
  );
};
export const StrekName = () => {
  return "harish";
};
