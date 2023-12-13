"use client"

import styles from '../styles/homepage.module.css'

export default function HomePage() {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.element}>
                    <div className={styles.elementHeader}>
                        <h1>ScholarCD</h1>
                        <button className={styles.loginButton}>
                            Log In
                        </button>
                    </div>
                    <div className={styles.accountType}>
                        <button className={styles.accountOption}>Teacher</button>
                        <p>/</p>
                        <button className={styles.accountOption}>Student</button>
                    </div>
                    <form className={styles.form}>
                        <label>Email</label>
                        <input></input>
                        <label>Password</label>
                        <input></input>
                    </form>
                </div>
            </div>

        </>
    )
}