import React, { Component } from "react";
import Style from '../Strek/Strek.module.scss'
import Github_api from '../../Components/Github-api'
export const StrekHome = () =>  {
    return (
        <>
        <nav className={Style.h1}>harish</nav>
        <Github_api username="harish-sethuraman" showRepo="true" />
        </>
        
        );
}
export const StrekName = () => {return "harish"}

