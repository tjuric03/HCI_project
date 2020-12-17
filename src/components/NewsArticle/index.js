import React from 'react'
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