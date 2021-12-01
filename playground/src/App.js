import React from 'react';
import { AuthContext, AuthProvider } from './contexts/authContext';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  
import { SignIn, Profile } from 'auth-component-library';

const App = ()  => {

    const mockAPI = 'http://localhost:3000'

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={
                    <SignIn 
                        authContext={ AuthContext } 
                        authUrl={ `${mockAPI}/auth` } 
                    />} 
                />
                <Route path="/profile" element={
                    <Profile
                        profileURL={ `${mockAPI}/profile` } 
                    />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
