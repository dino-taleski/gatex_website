import React from "react";
import styles from "@/components/collections/collections.module.css";

const Collections = () => {
    return (
        <>
            <div className={styles.collection_links}>
                <div className={styles.cat_div}>
                    <img className={styles.img} src="./cats/duks.jpg" alt="" />
                    <p>ДУКСЕРИ</p>
                </div>
                <div className={styles.cat_div}>
                    <img className={styles.img} src="./cats/tren.jpg" alt="" />

                    <p>ТРЕНЕРКИ</p>
                </div>
                <div className={styles.cat_div}>
                    <img
                        className={styles.img}
                        src="./cats/tshirt.jpg"
                        alt=""
                    />
                    <p>МАИЦИ</p>
                </div>
            </div>
        </>
    );
};

export default Collections;
