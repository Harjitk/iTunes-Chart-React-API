import React from 'react';
// import Song from "./Song";



const SongList = (props) => {
 const chartList = props.songs.map((song, index) => {
   return(
    <p>{song.title.label}</p>
  )
});

return(
  <div>
    {chartList}
  </div>
)

}


export default SongList;
