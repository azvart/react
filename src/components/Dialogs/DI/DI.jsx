import React from 'react';
import s from './../dialogs.module.css';
import {NavLink} from 'react-router-dom';









const DialogItem =(props)=>{

  return (
<div className={s.item}><li> <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink></li></div>
  );
}


export default DialogItem;
