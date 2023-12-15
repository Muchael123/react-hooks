import React, { createContext } from 'react';
import { useState } from 'react';
import ChangeName from './components/ChangeName';
import DisplaySign from './components/DisplaySign';
import Increament from './components/Increament';
import SignIn from './components/SignIn';
import UseEffect from './components/UseEffect';
import Login from './components/Login';
import Admin from './components/Admin';
import Navbar from './components/Navbar';

export const LoginContext = createContext();


function App() {
   const [signedIn, setSignedIn] = useState(true);
  return (
    <div className="App">
      <LoginContext.Provider value={[signedIn, setSignedIn]}>
        {signedIn ? (
          <div>
            <Login />
            <DisplaySign />
            <Admin/>
          </div>
        ) : (
          <div className='h-screen'>
            <Navbar />
            <SignIn />
            <h1 className="m-5">Hello world</h1>
            <DisplaySign />
            <Increament />
            <ChangeName />
            <UseEffect />
          </div>
        )}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
