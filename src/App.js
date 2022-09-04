import './App.css';
import { useEffect, useState } from 'react';
import TracksList from './components/TracksList';
import Auth from './components/Auth'
import PlaylistFollower from './components/PlaylistFollower'


const App = () => {

  const [profileSet, setProfileSet] = useState(false)
  const [user, setUser] = useState(null) 
  const [token, setToken] = useState('')



  return (
    <div className="App">
   
     <Auth setProfileSet={setProfileSet} token={token} setToken={setToken}/>
     { profileSet &&
     <div>
    {/* <PlaylistFollower token={token}/> */}
       <TracksList token={token} />
     </div>
     }
    </div>
  );
}

export default App;
