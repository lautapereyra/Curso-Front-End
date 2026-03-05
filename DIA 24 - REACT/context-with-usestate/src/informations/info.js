import { createContext, useState } from "react";


export const Infocontext = createContext();

const Info = (props) => {
    const [value, setValue] = useState(123123);
    const [name, setName] = useState('Lautaro');

    return (

        <Infocontext.Provider
            value={{ value, setValue, name }}
        >
            {props.children}
        </Infocontext.Provider>
    );
};

export default Info;