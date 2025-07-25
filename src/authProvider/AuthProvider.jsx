import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const valueInfo={createUser}
    return (
        <div>
            <AuthContext.Provider value={valueInfo}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;