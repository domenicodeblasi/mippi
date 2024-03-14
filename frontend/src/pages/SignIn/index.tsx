import React from "react"
import styles from "./SignIn.module.css"
import { Link } from "react-router-dom"

import Layout from "./../../components/Layout"

const SignIn: React.FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return (
        <Layout>
            <section className={styles.signInContainer}>
                <p>Non hai ancora un account? <Link to="./../sign-up">Iscriviti</Link></p>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="username">username</label>
                        <input type="text" name="username" />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" />
                    </div>

                </form>
            </section>
        </Layout>
    )
}

export default SignIn