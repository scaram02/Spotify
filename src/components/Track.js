import React from 'react';
import { useEffect, useState } from 'react';

const Track = ({track}) => {
console.log(track)

    return (
        <div>
            <p>{track.name} by {track.artists[0].name}</p>
        </div>
    )
}

export default Track