import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    // userRegistration
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // userLogin 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // googleLogin
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo = {
        user, setUser, registerUser, loginUser, googleLogin
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