import './App.css';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Auth from './components/Auth'
const App = () => {

  const [profileSet, setProfileSet] = useState(false)
  const [user, setUser] = useState(null) 
  const [token, setToken] = useState('')



  return (
    <div className="App">
   
     <Auth setProfileSet={setProfileSet} profileSet={profileSet} setUser={setUser} token={token} setToken={setToken}/>
     <Profile user={user} token={token} />
    </div>
  );
}

export default App;
