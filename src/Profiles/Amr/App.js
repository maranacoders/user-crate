import React, { Component } from "react";
import Style from '../Amr/Amr.module.scss'
import Github_api  from '../../Components/Github-api'
export const AmrHome = () =>  {
    return (
    <>
    <h1 className={Style.h1}>Amaresh</h1>
    <Github_api username="amareshsm" showRepo="true" />
        </>
        );
}
export const AmrName = () => {return "amaresh"}
