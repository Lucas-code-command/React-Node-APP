import React from "react"
import { useContext, useEffect, useState } from "react"

import { auth } from './Auth_firebase/firebase.js'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentuser] = useState()

    const value = {
        currentUser,
        signUp
    }

    function signUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }// error on this function

    useEffect(()=>{
       const unsubscribe =  auth.onAuthStateChanged(user=>{
            setCurrentuser(user)
        })

        return unsubscribe
    },[])

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
