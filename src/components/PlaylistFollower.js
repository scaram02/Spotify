import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'



const PlaylistFollower = ({token}) => {

    useEffect(() => {

        // "https://api.spotify.com/v1/playlists/7lLdZwvNuvJVMTN7Su52Lj"
        // 7lLdZwvNuvJVMTN7Su52Lj

        if (token){
            axios.get(`https://api.spotify.com/v1/playlists/7lLdZwvNuvJVMTN7Su52Lj`, 
             {headers: {'Authorization': `Bearer ${token}`,'Content-Type': 'application/json'}})
             .then((theList) => console.log(theList))
             .catch((err) => console.log("UH OH!", err))
        } else {
            console.log('no token yet')
        }
     })
     

    return (
        <div>

        </div>
    )
}

export default PlaylistFollower