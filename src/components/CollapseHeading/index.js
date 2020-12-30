import React, { useState } from "react"
import Collapse from "@kunukn/react-collapse"
import cx from "classnames"

import styles from "./style.module.css"
import "./button.scss"

const CollapseHeading = ({ content, title, img }) => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <div>
      <button className={styles.heading} onClick={() => toggle()}>
        <div className={styles.scaleContainer}>
            <h2>{title}</h2>
            <div className={"rotate90"}>
            <svg
                className={cx("icon", { "icon--expanded": isOpen })}
                viewBox="6 0 12 24"
            >
                <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
            </div>
        </div>
      </button>
      <Collapse isOpen={isOpen} className={styles.collapse}>
        <div>{content}</div>
      </Collapse>
    </div>
  )
}

export default CollapseHeading


/* 

TO ABOUT.js

<div style={{margin: "30px auto", maxWidth:"1024px", padding:"0px 20px"}}>
        <CollapseHeading
          title={"HISTORY"}
          content={
            <p>
              {" "}
              When he announced in Paris, on a winter's evening in 1892, the
              forthcoming re-establishment of the Olympic Games, Pierre de
              Coubertin was applauded, but nobody at the time imagined the scale
              of the project that reviving the ancient Olympic Games, appointing
              a committee in charge of organising them and creating an
              international movement would entail. The International Olympic
              Committee was created on 23 June 1894; the first Olympic Games of
              the modern era opened in Athens on 6 April 1896; and the Olympic
              Movement has not stopped growing ever since.{" "}
            </p>
          }
        ></CollapseHeading>
        <CollapseHeading
          title={" THE INTERNATIONAL OLYMPIC COMMITTEE "}
          content={
            <>
              <p>
                The International Olympic Committee (IOC) is a not-for-profit
                independent international organisation that is committed to
                building a better world through sport. Created on 23 June 1894,
                just under two years before the first Olympic Games of the
                modern era in April 1896, the IOC is the supreme authority of
                the Olympic Movement.
              </p>
              <p>
                As the leader of the Olympic Movement, the IOC acts as a
                catalyst for collaboration between all parties of the Olympic
                family, from the NOCs, the IFs, the athletes and the OCOGs to
                the Worldwide Olympic Partners, broadcast partners and United
                Nations (UN) agencies, and shepherds success through a wide
                range of programmes and projects. On this basis, it ensures the
                regular celebration of the Olympic Games, supports all
                affiliated member organisations of the Olympic Movement and
                strongly encourages, by appropriate means, the promotion of the
                Olympic values.
              </p>
            </>
          }
        ></CollapseHeading>
        <CollapseHeading
          title={"THE OLYMPIC MOVEMENT"}
          content={
            <>
              <p>
                The three main constituents of the Olympic Movement are the
                International Olympic Committee (“IOC”), the International
                Sports Federations (“IFs”) and the National Olympic Committees
                (“NOCs”).
              </p>
              <p>
                In addition to its three main constituents, the Olympic Movement
                also encompasses the Organising Committees for the Olympic Games
                (OCOGs), the national associations, clubs and persons belonging
                to the IFs and NOCs, particularly the athletes, as well as the
                judges, referees, coaches and the other sports officials and
                technicians. It also includes other organisations and
                institutions as recognised by the IOC.
              </p>
              <p>
                As is clearly stated in the Olympic Charter: “The goal of the
                Olympic Movement is to contribute to building a peaceful and
                better world by educating youth through sport practised in
                accordance with Olympism and its values.” (Olympic Charter,
                Chapter 1, Rule 1.1)
              </p>
            </>
          }
        ></CollapseHeading>
        <CollapseHeading
          title={" FUNDING "}
          content={
            <>
              <p>
                The International Olympic Committee is entirely privately funded
                and ever since the first modern Olympic Games in Athens in 1896
                it has relied upon contributions from commercial partners in
                order to stage the Games and support the Olympic Movement.
              </p>
              <p>
                The IOC redistributes 90% of its revenue, meaning that every day
                the equivalent of over USD 3.4 million is distributed to support
                athletes and sports organisations at all levels around the
                world.
              </p>
              <p>
                Sponsorship in various forms has supported the Olympic Movement
                since the first modern Olympic Games in Athens in 1896, while
                broadcast coverage has been the most significant factor in the
                promotion of the Olympic ideals and the growth of the Olympic
                Games worldwide.
              </p>
            </>
          }
        ></CollapseHeading>
      </div>



*/