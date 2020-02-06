import React from 'react';
import s from './../dialogs.module.css';
import {NavLink} from 'react-router-dom';





const Message =(props)=>{

  return(
    <div className={s.message}>{props.mes}</div>
  );
}


export default Message;
