import { Outlet } from "react-router-dom";
import Header from "../components/header";


const Routing = () => {
    return (
        <>
            <Header />
            <Outlet></Outlet>
        </>
    )
}

export default Routing;