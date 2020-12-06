import React from 'react'
import FeaturedImage from '../Images/FeaturedImage'
import styles from './style.module.css'

const Featured = () => {

    return(
        <section className={styles.featured}>
            <FeaturedImage></FeaturedImage>

            <div className={styles.article}>
                <article >
                    <h2>Trampoline best Olympic sport confirmed</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Featured;