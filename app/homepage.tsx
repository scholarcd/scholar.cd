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
                </div>
            </div>

        </>
    )
}