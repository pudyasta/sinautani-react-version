import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase'

const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}



export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()


    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const signIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signUp,
        signIn

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider >
    )
}
