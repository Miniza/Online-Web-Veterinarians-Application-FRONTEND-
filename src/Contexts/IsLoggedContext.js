import {useState,createContext} from 'react';

export const IsLoggedContext = createContext();

export const IsLoggedProvider = props =>{
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <IsLoggedContext.Provider value={[loggedIn, setLoggedIn]}>
            {props.children}
        </IsLoggedContext.Provider>
    );
}