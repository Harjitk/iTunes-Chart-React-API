import React from 'react';

const Song = (props) => {

  return (
    <div className="song">
      <h2 className="title">{props.title}</h2>
      {props.children}
    </div>
  )
}



export default Song;
