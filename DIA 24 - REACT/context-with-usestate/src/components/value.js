import { useContext } from "react";
import { Infocontext } from '../informations/info';

const Value = () => {
    const { value } = useContext(Infocontext);

    return <h1>Value of x is {value}</h1>;
};

export default Value;