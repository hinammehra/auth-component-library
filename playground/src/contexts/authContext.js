import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
    token: null,
    setToken: (auth) => {}
});

export  const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}