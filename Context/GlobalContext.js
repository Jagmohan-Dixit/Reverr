import React, { useContext, useState,} from 'react';

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    return (
        <AppContext.Provider
        value={{isLoggedIn, isLoggedOut, setIsLoggedIn, setIsLoggedOut}}
        >
        {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
