import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config'
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const logOutUser = () => {
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User', currentUser)
            setUser(currentUser)

            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        createUser,
        singInUser,
        logOutUser,
        updateUserProfile,
        googleLogIn,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;