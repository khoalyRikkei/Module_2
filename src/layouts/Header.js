import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../routes";
import "./header.css";
export default function Header() {
    const [title, setTitle] = useState("Home");
    useEffect(() => {
        document.title = title + " - Example Reack Hooks";
    }, [title]);

    return (
        <header>
            <nav style={navBarStyle}>
                {routes.map((route, index) => (
                    <NavLink
                        to={route.path}
                        key={index}
                        onClick={() => setTitle(route.title)}
                        className={(status) => {
                            return status.isActive
                                ? "active nav-header"
                                : "nav-header";
                        }}
                    >
                        {route.title}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}
const navBarStyle = {
    display: "flex",
    gap: "20px",
    padding: "20px",
    fontSize: "20px",
};
