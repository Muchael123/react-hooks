import React, { createContext } from 'react';
import { useState } from 'react';
import ChangeName from './components/ChangeName';
import DisplaySign from './components/DisplaySign';
import Increament from './components/Increament';
import SignIn from './components/SignIn';
import UseEffect from './components/UseEffect';
import Login from './components/Login';

export const LoginContext = createContext();


function App() {
   const [signedIn, setSignedIn] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={[signedIn, setSignedIn]}>
        {signedIn ? (
          <Login />
        ) : (
          <div>
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
