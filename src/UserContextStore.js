import React from 'react';


const UserContextStore = React.createContext({
  user: null,
  logIn: () => { },
  logOut: () => { },
  updateUserInfo: () => { }
});

export default UserContextStore;