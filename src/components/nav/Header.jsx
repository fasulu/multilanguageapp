import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next"
import i18next from "i18next";

const Header = () => {
    
    const {t, i18n}= useTranslation(["common"]);

    useEffect(()=>{
        if(localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, []);

    const handleLanguageChange=(e)=> {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand p-2" to="/">
                {/* Multilingual Tutorial */}
                {t("multilingualtutorial")}
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse p-2" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ml-2">
                        <select className="nav-link bg-dark border-0 ml-1 mr-2"
                            value={localStorage.getItem("i18nextLng")}
                            onChange={handleLanguageChange}>
                            <option value="en">English</option>
                            <option value="fr">Français</option>
                        </select>
                    </li>
                    <li className="nav-item ml-2">
                        <Link className="nav-link" to="/profile">
                            {/* Profile */}
                            {t("profile")}
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;