import { useState } from 'react';
import TosterContextStore from './TosterContextStore';

const TosterContext = (props) => {

    const [msg, setMsg] = useState(null);

    const setToastrMsg = (msgs) => {
        setMsg(msgs);
    }

    return (
        <TosterContextStore.Provider value={{
            msg,
            setToastrMsg,
        }}>
            {props.children}
        </TosterContextStore.Provider>
    );
}

export default TosterContext;