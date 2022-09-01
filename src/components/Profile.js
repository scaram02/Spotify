import React from 'react';
import { useEffect, useState } from 'react';
import Auth from './Auth'
import axios from 'axios'

const Profile = ({user, token}) => {

 

useEffect(() => {
    // console.log('i am the user', user)
    // console.log('im the token', token)
   
   if (token.length > 0){
    //    axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10`, // does not work
    axios.get(`https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`, // works
        {headers: {'Authorization': `Bearer ${token}`,'Content-Type': 'application/json'}})
        .then((theList) => console.log('hmmmm', theList))
   } else {
       console.log('no token yet')
   }
})

    return (
        <div>
  
   
        </div>
    )
}

export default Profile