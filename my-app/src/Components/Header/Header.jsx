import { NavLink } from "react-router-dom";
import cl from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <NavLink className="navbar-brand" to="home"><i class="bi bi-house-door-fill"></i></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/myposts">My posts</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active" to="/messages">Messages</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active" to="/news">News</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active" to="/settings">Settings</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header; 