import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // register route
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }
    // login route
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }
    const authInfo = {
        registerUser, loginUser
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