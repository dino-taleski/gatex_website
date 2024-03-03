import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className={styles.main_nav}>
                <div className={styles.logo}>
                    <Link href={"/"}>
                        <img
                            src="./GA_logo.jpg"
                            alt="company logo"
                            style={{ width: "100%" }}
                        />
                    </Link>
                </div>
                <ul className={`${styles.ul} ${styles.ul_menu}`}>
                    <Link href={"/shop/"}>
                        <li>Shop</li>
                    </Link>
                    <Link href={"/location/"}>
                        <li>Локација</li>
                    </Link>
                    <Link href={"/about-us/"}>
                        <li>За Нас</li>
                    </Link>
                </ul>
                <ul className={`${styles.ul} ${styles.cart}`}>
                    <li>Корпа</li>
                </ul>
            </div>
        </>
    );
};

export default Header;
