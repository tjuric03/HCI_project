import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import {Link} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Featured = ({mostRecentNews}) => {
 
    //const content = documentToReactComponents(JSON.parse(mostRecentNews.node.content.raw));

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