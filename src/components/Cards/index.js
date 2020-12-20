import React from 'react';
import CardItem from './../CardComponent';
import styles from "./style.module.css"
import {Link} from "gatsby";
import {RiArrowDropRightLine} from "react-icons/ri"

function Cards({news}) {
  return (
    <div className={styles.cards}>
      <div className={styles.headingContainer}>
        <h1 className={styles.newsTitle}>Latest News</h1>
        <Link to="/news" className={styles.link}>
          <div className={styles.allNews}>
            All news<RiArrowDropRightLine size="22px" style={{verticalAlign:"middle"}}/>
          </div>
        </Link>
      </div>
      <div className={styles.cards_container}>
        <div className={styles.cards_wrapper}>
          <ul className={styles.cards_items}>
            <CardItem
              image={news[0].node.image.fluid}
              title={news[0].node.title}
              sport={news[0].node.sport}
              slug={news[0].node.slug}
            />
            <CardItem
              image={news[1].node.image.fluid}
              title={news[1].node.title}
              sport={news[1].node.sport}
              slug={news[1].node.slug}
            />
          </ul>
          <ul className={styles.cards_items}>
            <CardItem
              image={news[2].node.image.fluid}
              title={news[2].node.title}
              sport={news[2].node.sport}
              slug={news[2].node.slug}
            />
            <CardItem
              image={news[0].node.image.fluid}
              title={news[0].node.title}
              sport={news[0].node.sport}
              slug={news[0].node.slug}
            />
            <CardItem
              image={news[1].node.image.fluid}
              title={news[1].node.title}
              sport={news[1].node.sport}
              slug={news[1].node.slug}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;