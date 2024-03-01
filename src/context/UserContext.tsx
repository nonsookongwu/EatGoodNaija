import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from 'react'
import { TSignUpSchema } from '../utils/validation';
import userService from '../APIServices/userService';

export interface UserAuth{
  
  _id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  isEmailVerified: boolean;
  role: string;
  "createdAt": string;
  "updatedAt": string;

}

export interface UserContext {
  user: UserAuth | null;
  setUser: Dispatch<SetStateAction<UserAuth | null>>;
}

export const UserContext = createContext({} as UserContext);

const UserContextProvider = ({ children }: PropsWithChildren) => {
    
const [user, setUser] = useState<UserAuth | null>(null);
const [error, setError] = useState("");
const [loading, setLoading] = useState(true);

//     useEffect(() => {
//     if (!user) {
//       const controller = new AbortController();

//       setLoading(true);
//         console.log("running")
//       const { request, cancel } = userService.getUser();
//       request
//         .then((res) => {
//           console.log(res.data)
//           setUser(res.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           setLoading(false);
//           setError(error.message);
//         });

//          console.log("running plus");

//       return () => {
//         controller.abort();
//       };
//     }

// }, []);

  return (
      <UserContext.Provider value={{user, setUser}}>
          {children}
      </UserContext.Provider>
  )
}

export default UserContextProvider