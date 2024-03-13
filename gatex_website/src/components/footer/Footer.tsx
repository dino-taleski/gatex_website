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
                        <li>Кратки линкови</li>
                        <Link href={"/shop/"}>
                            <li>Shop</li>
                        </Link>
                        <Link href={"/location/"}>
                            <li>Локација</li>
                        </Link>
                        <Link href={"/about-us/"}>
                            <li>За Нас</li>
                        </Link>
                        <Link href={"/contact/"}>
                            <li>Контакт</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ul_reset}>
                        <li>Социјални медиуми</li>
                        <li>
                            <i
                                style={{
                                    fontSize: "35px",
                                    color: "rgb(116, 146, 211)",
                                }}
                                className="fa-brands fa-facebook"
                            ></i>
                        </li>
                        <li>
                            <i
                                style={{
                                    fontSize: "35px",
                                    color: "rgb(116, 146, 211)",
                                }}
                                className="fa-brands fa-instagram"
                            ></i>
                        </li>
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
