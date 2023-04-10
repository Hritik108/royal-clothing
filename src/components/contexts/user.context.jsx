import { createContext, useState,useReducer } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,createUserDocumentFromAuth
} from "../../utils/firebase/firebase.util";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";
import { useEffect } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
  'SET_CURRENT_USER':'SET_CURRENT_USER'
}

const userReducer = (state,action) =>{
console.log('dispatched');
console.log(action);
  const {type,payload} = action;
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER: 
      return{
        ...state,
        currentUser:payload
      }
    default:
      throw new Error(`Unhandled type ${type} in reducer`)
  }

}

const INITIAL_STATE = {
  currentUser:null
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE)
  console.log(currentUser);
  const setCurrentUser = (user) =>{
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
  }
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
