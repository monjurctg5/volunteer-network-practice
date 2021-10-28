import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react";
import initializeAuthentication from "../Componets/Firebase/FirebaseConfig"
initializeAuthentication()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    const [isAdmin, setIsadmin] = useState(null)

    // const [adminPass,setAdminPass] = useState("")

    const googleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user)
                setIsLoading(true)
                setUser(res.user)
            })
    }
    const manulaySignin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => setUser(res.user))
    }
    const manuallyRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
            setIsLoading(false)
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    }, [])
    return {
        googleSignin,
        user,
        manulaySignin,
        manuallyRegistration,
        logout,
        setUser,
        isAdmin,
        setIsadmin


    }
}

export default useFirebase