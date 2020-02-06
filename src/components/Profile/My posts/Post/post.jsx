import React from 'react';
import s from './post.module.css';




const Post =(props) =>{
debugger;
  return(
    <div className='row'>
    <div className='col-sm-12'><p className="card-text item">{props.posts}</p></div>

    </div>
  );
}
export default Post;
