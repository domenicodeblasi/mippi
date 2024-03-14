import React from "react"
import styles from "./Header.module.css"
import { useLocation, Link } from "react-router-dom"

import Logo from "../../assets/imgs/logo.svg"

const Header: React.FC = () => {

    const location = useLocation()

    return (
        <header id={styles.header}>

            <div className={styles.logoAndTitleContainer}>
                <img
                    src={Logo}
                    alt="mippi logo"
                    className={styles.logo}
                />
                <h1 className={styles.title}>mippi</h1>
            </div>

            {location.pathname === "/" && (
                <div className={styles.btnsContainer}>

                    <button className={styles.btn}>
                        <Link className={styles.btnClickArea} to="sign-in">Accedi</Link>
                    </button>

                    <button className={`${styles.btn} ${styles.signUpBtn}`}>
                        <Link className={styles.btnClickArea} to="sign-up">Iscriviti</Link>
                    </button>

                </div>
            )}

        </header>
    )
}

export default Header