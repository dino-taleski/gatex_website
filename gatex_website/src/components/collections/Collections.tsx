import React from "react";
import styles from "@/components/collections/collections.module.css";

const Collections = () => {
    return (
        <>
            <div className={styles.collection_links}>
                <div className={`${styles.width_100} ${styles.cat_div}`}>
                    <img
                        className={`${styles.width_100} ${styles.img}`}
                        src="./cats/duks2.jpg"
                        alt=""
                    />
                    <p>Дуксери</p>
                </div>
                <div className={`${styles.width_100} ${styles.cat_div}`}>
                    <img
                        className={`${styles.width_100} ${styles.img}`}
                        src="./cats/tren2.jpg"
                        alt=""
                    />

                    <p>Тренерки</p>
                </div>
                <div className={`${styles.width_100} ${styles.cat_div}`}>
                    <img
                        className={`${styles.width_100} ${styles.img}`}
                        src="./cats/tshirt2.jpg"
                        alt=""
                    />
                    <p>Маици</p>
                </div>
            </div>
        </>
    );
};

export default Collections;
