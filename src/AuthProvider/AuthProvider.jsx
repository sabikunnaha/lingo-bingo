import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setloader] = useState(true)


    const createUser = (email, password) => {
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // Update user

    const updateUserProfile = (Name, image) => {
      return  updateProfile(auth.currentUser, {
            displayName: Name, 
            photoURL:  image
        }) 
    }

    //Login 

    const loginUser = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Sing in with Google
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle = () => {
        setloader(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Logout

    const logoutUser = () => {
        setUser(null)
        return signOut(auth);
    }

    //Obsarver

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setloader(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        singInWithGoogle,
        logoutUser,
        updateUserProfile,
        loader,
        user,

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;