function Header() {
    return(
        <header className="header">
            <div classNameName="container header__row">
                <span className="logo">PASTASI</span>
                <ul className="header-nav">
                    <li className="header-nav__item">
                        <span className="header-nav__link">
                            HOME
                        </span>
                    </li>
                    <li className="header-nav__item">
                        <span className="header-nav__link">
                            ABOUT
                        </span>
                    </li>
                    <li className="header-nav__item">
                        <span className="header-nav__link">
                            MENU
                        </span>
                    </li>
                    <li className="header-nav__item">
                        <span className="header-nav__link">
                            FILIAL
                        </span>
                    </li>
                    <li className="header-nav__item">
                        <span className="header-nav__link">
                            CONTACT
                        </span>
                    </li>
                </ul>
            </div>
    </header>
    )
}

export default Header;
