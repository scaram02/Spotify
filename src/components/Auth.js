import React from 'react';
import { useEffect, useState } from 'react';
// import spotifyApi from 'spotify-web-api-node'
import axios from 'axios'


const Auth = ({setProfileSet, profileSet, setUser, token, setToken}) => {




const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = "http://localhost:3000"
const SCOPE = 'user-top-read playlist-read-collaborative playlist-read-private'



// set token at login
useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)
    getUserData()
}, [token])


const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
    setProfileSet(false)
}

const getUserData = () => {
    setTimeout(() => {
       axios.get('https://api.spotify.com/v1/me', 
       {headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'}})
       .then((theUser) => setUser(theUser.data))
    }, 800)

}



    return (
        <div>
 {!token ?
<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Log in to Spotify</a>
       : <button onClick={logout}>Log out</button>
 }
 <p onClick={getUserData}>get user data</p>
       </div>
    )
}

export default Auth