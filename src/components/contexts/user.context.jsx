import { createContext, useState } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,createUserDocumentFromAuth
} from "../../utils/firebase/firebase.util";
import { useEffect } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      if(user){
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    }); 

    // console.log(unsubscribe);
    return unsubscribe; //cleanup code
  }, []);

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
