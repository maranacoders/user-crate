import React from 'react';
import Style from './Amr.module.scss';
import Github from '../../Components/ProfileComponent/Github';

export const AmrHome = () => (
  <>
    <h1 className={Style.h1}>Amaresh</h1>
    <Github username="amareshsm" showRepo="true" />
  </>
);
export const AmrName = () => 'amaresh';
