import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import app from "../firebase/firebase.config"
export const AuthContext = createContext();
const auth = getAuth(app)

const ContextAuth = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // sign up
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in
    const signIn = (email, password) =>{
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
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        signUp,
        signIn,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAuth;