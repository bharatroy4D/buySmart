import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    // userRegistration
    const registerUser = async (email, password) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        setUser(result.user)
        return result;
    }
    // userLogin 
    const loginUser = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        setUser(result.user)
        return result;
    }
    // googleLogin
    const googleLogin = async () => {
        const result = await signInWithPopup(auth, googleProvider);
        setUser(result.user)
        return result;
    }
    // SignOUt user
    const signOutUser = async () => {
        const result = await signOut(auth);
        setUser(null);
        return result;
    }
    const authInfo = {
        user, setUser, registerUser, loginUser, googleLogin, signOutUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider;