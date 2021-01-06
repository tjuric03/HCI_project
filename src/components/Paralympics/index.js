import React from "react"
import Someity from "../Images/Someity"
import styles from "./style.module.css"

import Countdown, {zeroPad} from "react-countdown"

const Paralympics = () => {

    const Completionist = () => <span>The timer has ended!</span>;

    const renderer = ({days ,hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
            <div className={styles.countdownContainer}>
                <div><div className={styles.label}>DAYS</div> <div className={styles.time}>{days}</div></div>
                <div><div className={styles.label}>HRS</div> <div className={styles.time}>{zeroPad(hours)}</div></div>
                <div><div className={styles.label}>MIN</div> <div className={styles.time}>{zeroPad(minutes)}</div></div>
                <div><div className={styles.label}>SEC</div> <div className={styles.time}>{zeroPad(seconds)}</div></div>
            </div>
          )
        }
      };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PARALYMPIC GAMES</h1>
            <div className={styles.flexContainer}> 
                <div className={styles.banner}>
                    <section>
                        <div className={styles.text}>
                            <h2>24 AUGUST - 5 SEPTEMBER</h2>
                            <p>The countdown to the Paralympic Games has begun, and as the excitement builds here's everything you need to know!</p>
                            <Countdown 
                                    date={new Date("24 August 2021")}
                                    renderer={renderer}
                                    zeroPadTime={2}
                                >
                            </Countdown>
                        </div>
                    </section>
                    <div className={styles.flexImage}>
                        <Someity>

                        </Someity>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Someity>

                    </Someity>
                </div>
            </div>
        </div>
    )
}

export default Paralympics