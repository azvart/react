import {renderEntireTree} from '../render.js'

let state = {
  posts:[
    {post:'Hi, how are you?'},
    {post:'It is my new project dude=) '}
  ],
  dialogs:[
    {id:1, name:'Vlad'},
    {id:2, name:'Sveta'},
    {id:3, name:'Viktor'},
    {id:4, name:'Jura'}
  ],
  message: [
    {mes:'Hi'},
    {mes:'How are you?'},
    {mes:'Yo'}

  ]
};

export let addPost = (postsMessage) => {
  let newPost = {
    post:postsMessage
  };
  state.posts.unshift(newPost);
 renderEntireTree(state);
}

export let addDialogs = (dialogsMessage) => {
  let newDialog = {
    mes:dialogsMessage
  };
  state.message.push(newDialog);
  renderEntireTree(state);
}



export default state;
