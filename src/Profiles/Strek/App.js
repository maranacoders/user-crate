import React, { Component } from "react";
import Style from '../Strek/Strek.module.scss'
import Github_api from '../../Components/Github-api'
import Stackoverflow_api from '../../Components/Stackoverflow-api'
export const StrekHome = () =>  {
    return (
        <>
        <nav className={Style.h1}>harish</nav>
        <Github_api show="true" username="harish-sethuraman" showRepo="true" />
        <Stackoverflow_api show="true" userid="8780399" />
        </>
        
        );
}
export const StrekName = () => {return "harish"}

