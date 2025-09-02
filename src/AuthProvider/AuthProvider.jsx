import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    //Login 

    const loginUser = (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password);
    }

    //Sing in with Google
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle = ()=>{
       return signInWithPopup(auth, googleProvider);
    }

    //Obsarver

    const [user, setUser] = useState({});
    console.log(user);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        singInWithGoogle,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;