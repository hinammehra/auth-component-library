import React, { createContext, useState } from 'react';
import { AuthContext, AuthProvider } from './contexts/authContext';

import { SignIn } from 'auth-component-library';

// const AuthContext = createContext({
//     token: null,
//     setToken: (auth) => {}
//   });

// const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(null)

//     return (
//         <AuthContext.Provider value={{token, setToken}}>
//             <div> Token: { token } </div>
//             {children}
//         </AuthContext.Provider>
//     )
// }


const App = ()  => {

    return (
        <AuthProvider>
            <SignIn 
                authContext={ AuthContext } 
                authUrl=''
                redirectUrl={window.location.origin}
            />
        </AuthProvider>
    );
}

export default App;
