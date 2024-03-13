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
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Внесете го вашето име"
                                    required
                                />
                            </div>
                            <div className={styles.input_label}>
                                <label htmlFor="surname">Презиме</label>
                                <input
                                    type="text"
                                    id="surname"
                                    placeholder="Внесете го вашето презиме"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.input_label_group}>
                            <div className={styles.input_label}>
                                <label htmlFor="email">Е-Пошта</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Внесете ја вашата е-пошта"
                                    required
                                />
                            </div>
                            <div className={styles.input_label}>
                                <label htmlFor="number">Број</label>
                                <input
                                    type="text"
                                    id="number"
                                    placeholder="Внесете го вашиот број"
                                    required
                                />
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
                                placeholder="Внесете ја вашата порака"
                                required
                            ></textarea>
                        </div>
                        <div className={styles.form_button_div}>
                            <button className={styles.form_button}>
                                ИСПРАТИ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
