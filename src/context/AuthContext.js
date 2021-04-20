import React, {useContext, useState, useEffect} from 'react'
import {auth} from "../Firebase"
import {useHistory} from 'react-router-dom';


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}



export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const history = useHistory();

    function signUp(email, password){
        return auth.createUserWithEmailAndPassword(email,password);
    }
    function login(email, password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {

            if(user){
                setCurrentUser(user);
                
            }
            else{
                history.push('/login')
                setCurrentUser();
            }
            
        })

        return unsubscribe;
    });
    function signOut(){
        return auth.signOut();
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);
    }

    const value = {
        currentUser,
        signUp,
        signOut,
        login,
        resetPassword,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


