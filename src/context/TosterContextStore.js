import React from 'react';

const TosterContextStore = React.createContext({
    errorMsg: "",
    setToastrMsg: () => { },
});

export default TosterContextStore;