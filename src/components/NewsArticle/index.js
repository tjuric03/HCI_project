import React from 'react'
import NewsImage1 from '../Images/NewsImage1'
import styles from './style.module.css'
import Img from "gatsby-image"

const NewsArticle = ({picture,date,header}) => {
    return (
        <article>
            <div style={{ width: "340px", height: "191px" }}>
                <Img fluid={picture} />
            </div>
            <h2>{header}</h2>
            <time dateTime={date}>{date}</time>
        </article>
    )
}

export default NewsArticle