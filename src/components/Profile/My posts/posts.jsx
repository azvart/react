import React from 'react';
import Post from './Post/post.jsx';
import s from './posts.module.css';

const Posts = (props) =>{

let postElement = props.posts.map ( p => <Post posts={p.post} />);

let newPost = React.createRef();
let addPost = ()=>{
  let text = newPost.current.value;
  props.addPost(text);
  newPost.current.value = '';
}


  return (
    <div className={s.backPosts}>
    <h5 className="card-title"><p className={s.posts}>My posts</p></h5>
    <div className='row'>
    <div className='col-sm-12'>
       <textarea ref={newPost} className={s.area}></textarea>

    </div>
    <div className='col-sm-12 text-center'><button onClick = {addPost} className={s.button}>Add posts</button></div>
    </div>
{postElement}
    </div>
  );
}


export default Posts;
