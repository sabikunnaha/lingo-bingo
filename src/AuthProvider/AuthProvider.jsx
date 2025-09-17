import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setloader] = useState(true)

    console.log(loader)

    const createUser = (email, password) => {
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);

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
            setloader(false); // ✅ সবসময় শেষে loader false করতে হবে
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        singInWithGoogle,
        logoutUser,
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