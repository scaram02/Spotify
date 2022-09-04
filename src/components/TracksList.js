import React from 'react';
import { useEffect, useState } from 'react';
import Track from './Track'
import axios from 'axios'

const TracksList = ({token}) => {

 const [tracks, setTracks] = useState([])

useEffect(() => {

   if (token){
       axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=15`, 
        {headers: {'Authorization': `Bearer ${token}`,'Content-Type': 'application/json'}})
        .then((theList) => setTracks(theList.data.items))
        .catch((err) => console.log(err))
   } else {
       console.log('no token yet')
   }
}, [token])



    return (
        <div>
            {tracks.length > 0 && tracks.map((track) => {
               return <Track track={track}/>
            }) }
   
        </div>
    )
}

export default TracksList