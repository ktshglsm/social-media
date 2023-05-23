import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null);



    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);


    const login = () => {
        setCurrentUser({
            id: 1, name: 'Huy Hoang', profilePicture: 'https://vn-live-01.slatic.net/p/4ae83987b3323025809f737933a4be41.jpg'
        })

    }

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}