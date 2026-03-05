import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>

                <div className="logo">

                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Home</Link>
                        </li>
                    </ul>
                </nav>

            </header >
        </>
    )
}

export default Header;