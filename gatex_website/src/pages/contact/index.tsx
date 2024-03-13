import React from "react";
import styles from "@/styles/ContactUs.module.css";

const ContactPage = () => {
    return (
        <>
            <div>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: "34px",
                        fontWeight: "700",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        marginBottom: "0px",
                    }}
                >
                    CONTACT US
                </p>
                <div className={styles.contact_us_main_form}>
                    <form action="/">
                        <div className={styles.input_label_group}>
                            <div className={styles.input_label}>
                                <label htmlFor="name">Име</label>
                                <input type="text" id="name" />
                            </div>
                            <div className={styles.input_label}>
                                <label htmlFor="surname">Презиме</label>
                                <input type="text" id="surname" />
                            </div>
                        </div>
                        <div className={styles.input_label_group}>
                            <div className={styles.input_label}>
                                <label htmlFor="email">Е-Пошта</label>
                                <input type="text" id="email" />
                            </div>
                            <div className={styles.input_label}>
                                <label htmlFor="number">Број</label>
                                <input type="text" id="number" />
                            </div>
                        </div>
                        <div className={styles.input_label}>
                            <label htmlFor="message">Порака</label>
                            <textarea
                                className={styles.input_textarea}
                                name="message"
                                id="message"
                                cols="30"
                                rows="5"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
