import  { useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,onAuthStateChanged,updateProfile} from "firebase/auth";
import initializeAuthentication from '../Components/Firebase/firebase.init';


initializeAuthentication();


const useFirebase = () => {

const auth = getAuth();

const [user,setUser]=useState({});
const [authError, setAuthError] = useState('');
const [isLoading, setIsLoading] = useState(true);





// using this function ,user will be registered
const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history('/');
        })
        .catch((error) => {
            setAuthError(error.message);
           
        })
        .finally(() => setIsLoading(false));
}



// using this function ,user will be login
const loginUser=(email,password,history,location)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/dashboard';
    history(destination);
    setAuthError('')})
  .catch((error) => {setAuthError(error.message)})
  .finally(()=>setIsLoading(false))

}

// Observed User is Login or Not
useEffect(()=>{

    const unSubscribed =onAuthStateChanged(auth, (user) => {
           if (user) {
               setUser(user);
             
           } else {
             setUser({})
           }
           setIsLoading(false);
         });
         return ()=>unSubscribed;
   },[auth])




const logoutUser=()=>{
    setIsLoading(true);
    signOut(auth).then(() => {
        
      }).catch((error) => {
        
      })
      .finally(()=>setIsLoading(false))
}





    return {
        user,
        registerUser,
        loginUser,
        logoutUser,
        authError,
        isLoading
    };
};

export default useFirebase;