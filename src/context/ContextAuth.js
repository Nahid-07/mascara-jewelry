import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from "../firebase/firebase.config"
export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const ContextAuth = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // sign up
    const signUp = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }
    //   logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // google signin

    const googleSignin = ()=>{
      return signInWithPopup(auth,provider)
    }
      useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
          //this part will execute once the component is unmounted.
          unsubscribe()
        }
      }, [])
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        signUp,
        signIn,
        updateUserProfile,
        logOut,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAuth;