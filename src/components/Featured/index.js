import React from 'react'
import styles from './style.module.css'
import BackgroundImage from "gatsby-background-image"
import {Link} from "gatsby"

const Featured = ({mostRecentNews}) => {

    return(
        <Link to={`/news/${mostRecentNews.node.slug}`}>
                <BackgroundImage
                    Tag="section"
                    className={styles.featuredImage}
                    fluid={mostRecentNews.node.image.fluid}
                    backgroundColor={`#040e18`}
                >
                    <div>
                        <h2>{mostRecentNews.node.sport.toUpperCase()}</h2>
                        <h1>{mostRecentNews.node.title}</h1>
                        <text>{mostRecentNews.node.date}</text>
                    </div>
                </BackgroundImage>
        </Link>
    )
}

export default Featured;