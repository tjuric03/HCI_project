import React from 'react'
import Img from "gatsby-image"
import {Link} from "gatsby"

import styles from "./style.module.css"

const NewsArticle = ({picture,date,header,sport,content,slug}) => {

    const dateObj = new Date(date);
    const options = {month: "long",day:"numeric",year:"numeric"};
    const formattedDate = dateObj.toLocaleDateString("en-US",options);

    const parsedContent = (JSON.parse(content.raw));
    const result = (parsedContent.content.filter(x => x.nodeType === "paragraph"));

    let text = result[0].content.map(x => x.value).join("");

    for(let i = 1; i++; i< 5){
        if(text.length < 250){
            text += result[i].content.map(x => x.value).join("");
        }
        else{
            break;
        }
    }

    return (
        <Link to={`/news/${slug}`} className={styles.link}>
            <article className={styles.container}>
                <div style={{ width: "300px", height: "200px"}}>
                    <Img fixed={picture} />
                </div>
                <div style={{width: "100%"}}>
                    <div className={styles.infoHeader}>
                        <div>{sport}</div>
                        <time dateTime={date}>{formattedDate}</time>
                    </div>
                    <div className={styles.infoBody}>
                        <h2>{header}</h2>
                        <div className={styles.text}>{text}</div>
                    </div>

                </div>
            </article>
        </Link>
    )
}

export default NewsArticle