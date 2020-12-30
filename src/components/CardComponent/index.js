import React from 'react';
import { Link } from 'gatsby';
import styles from "./style.module.css"
import Image from "gatsby-image"

function CardComponent({image,title,sport,slug}) {
  return (
    <>
      <li className={styles.cards_item}>
        <Link className={styles.cards_item_link} to={`/news/${slug}`}>
          <figure className={styles.cards_item_pic_wrap} sport={sport}>
            <div className={styles.cards_item_img}>
              <Image
                fluid={image}
                alt={title}
                imgStyle={{objectFit:'cover'}}
              />
            </div>
          </figure>
          <div className={styles.cards_item_info}>
            <h5 className={styles.cards_item_text}>{title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardComponent;