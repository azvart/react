import React from 'react';
import s from './dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DI/DI.jsx';
import Message from './Message/Message.jsx';



const Dialogs = (props)=>{



let mesItem = props.message.map( m=> <Message mes={m.mes}/> );
let dialogsItem = props.dialogs.map( d=> <DialogItem name={d.name} id={d.id}/>);

let newDialog = React.createRef();
let addDialogs = ()=>{
  let text = newDialog.current.value;
  props.addDialogs(text);
  newDialog.current.value = '';

}

  return(

    <div className='col-sm-10 row'>
    <div className='col-sm-2'>
   {dialogsItem}
    </div>
      <div className='col-sm-10 text-center'>
    {mesItem}
       </div>
      <div className = 'col-sm-12 d-flex'>
      <div className='col-sm-8 d-flex mx-auto'>
      <textarea className='form-control' ref={newDialog}></textarea>
      <button className=' btn btn-primary mx-2' onClick ={addDialogs}>Add Message</button>
      </div>
      </div>
    </div>

  );
}

export default Dialogs;
