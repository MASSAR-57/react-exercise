import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="position: fixed inset-x-0 top-0 bg-green-500">
            <h1 className="text-white text-6xl font-bold">Welcome Page!</h1>
            <nav>
                <Link to="/react-exercise/">HOME</Link>
            </nav>
        </header>
    )
};

export default Header;
