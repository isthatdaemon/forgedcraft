import { useTranslation } from "react-i18next";
import { Link, NavLink } from 'react-router-dom';

import Logo from "../../Assets/Images/logo.png"

import './Header.css';

function Header() {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className="header">
                <div className="navBar">
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>{t("header.home")}</NavLink>
                    <NavLink to="/servers" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>{t("header.servers")}</NavLink>
                </div>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Logo Png" width="400px" />
                </Link>
                <div className="navBar">
                    <NavLink to="/about" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>{t("header.about")}</NavLink>
                    <NavLink to="/contact" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>{t("header.contact")}</NavLink>
                </div>
            </div>
        </>
    );
}

export default Header;
