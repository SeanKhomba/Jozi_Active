import React, { useState } from "react";
// import app from "./base.jsx";
// import Loading from '/Users/sean/sites/jozi_active/src/components/Loading.jsx'
// import axios from "axios";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser] = useState(true);
  // const [pending, setPending] = useState(true);

  // useEffect(() => {
  //   const config = {
  //     headers : {
  //       Authorization: 'Bearer' + localStorage.getItem('token')
  //     }
  //   }
  //   axios.get('https://api.joziactive.com/api/user', config)
  //   .then(res => {
  //     setCurrentUser({user: res.data})
  //   })
  //   .catch(err => {console.log(err)})
  // }, []);

  // if(pending){
  //   return(
  //     <Loading/>
  //   )
  // }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
