import React from 'react';

const ThreadList = (props)=>
(
  <div>
  {props.thread.map((thread)=> <Thread  thread={thread} key={thread.id})}></div>
)
