import React from "react";
import styles from "@/components/footer/footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={styles.main_footer_div}>
                <div>
                    <ul className={styles.ul_reset}>
                        <li>
                            <img
                                style={{ width: "100px" }}
                                src="./GA_logo.jpg"
                                alt=""
                            />
                        </li>
                        <li>Petko Misirko br. 95</li>
                        <li>+389 12 345 678</li>
                        <li>someemail@someemail.com</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ul_reset}>
                        <Link href={"/shop"}>
                            <li>Shop</li>
                        </Link>
                        <li>Link 1</li>
                        <li>Link 1</li>
                        <li>Link 1</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ul_reset}>
                        <li>social 1</li>
                        <li>social 2</li>
                        <li>social 3</li>
                    </ul>
                </div>
            </div>
            <p
                style={{
                    textAlign: "center",
                    backgroundColor: "rgb(74, 110, 189)",
                    color: "white",
                    padding: "5px",
                    marginBottom: "0",
                }}
            >
                Powered by KD Group
            </p>
        </>
    );
};

export default Footer;
