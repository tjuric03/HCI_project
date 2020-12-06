import React from 'react'
import NewsImage1 from '../Images/NewsImage1'
import styles from './style.module.css'

const NewsArticle = ({picture,header}) => {
    return (
        <article>
            {picture}
            <h2>{header}</h2>
            <time datetime="2020-12-5">December 5, 2020</time>
        </article>
    )
}

export default NewsArticle