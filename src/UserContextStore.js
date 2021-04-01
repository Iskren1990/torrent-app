import React from 'react';


const UserContextStore = React.createContext({
  user: null,
  logIn: () => { },
  logOut: () => { }
});

export default UserContextStore;