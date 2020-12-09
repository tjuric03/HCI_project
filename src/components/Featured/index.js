import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"
import {Link} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Featured = ({mostRecentNews}) => {
 
    const content = documentToReactComponents(JSON.parse(mostRecentNews.node.content.raw));

    return(
        <Link to={`/news/${mostRecentNews.node.slug}`}>
            <section className={styles.featured}>
                <div style={{minWidth:"500px",maxWidth:"720px",flex:"1"}}> 
                    <Img fluid={mostRecentNews.node.image.fluid}/>
                </div>
                <div className={styles.article}>
                    <article >
                        <h2>{mostRecentNews.node.title}</h2>
                        {content}
                    </article>
                </div>
            </section>
        </Link>
    )
}

export default Featured;