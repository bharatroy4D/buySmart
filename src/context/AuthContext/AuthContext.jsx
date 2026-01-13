import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    return (
        <div>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider;