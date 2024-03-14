import React from "react"
import styles from "./SignUp.module.css"
import { Link } from "react-router-dom"

import Layout from "./../../components/Layout"

const SignUp: React.FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return (
        <Layout>
            <section className={styles.signUpContainer}>
                <p>Hai già un account? <Link to="./../sign-in">Accedi</Link></p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input type="text" name="username" />
                    </div>

                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" />
                    </div>

                    <div>
                        <label htmlFor="firstName">nome</label>
                        <input type="text" name="firstName" />
                    </div>

                    <div>
                        <label htmlFor="lastName">cognome</label>
                        <input type="text" name="lastName" />
                    </div>
                </form>

            </section>
        </Layout>
    )
}

export default SignUp