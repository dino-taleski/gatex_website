import React from "react";
import styles from "@/styles/AboutUs.module.css";

const AboutUsPage = () => {
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
                    ABOUT US
                </p>
                <div className={styles.about_us_main}>
                    <img
                        className={styles.about_us_banner}
                        src="./images/generic_fac.jpg"
                        alt=""
                    />
                    <div className={styles.about_us_blurb}>
                        <p className={styles.about_us_heading}>
                            This is our shop
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt eum, consectetur tempora voluptates
                            rem ab quas dolorum inventore totam sequi, est
                            necessitatibus earum impedit incidunt aspernatur id
                            ducimus at velit? Perspiciatis facilis rem nam
                            soluta. Consequatur eveniet vitae quam nihil modi
                            amet accusantium porro deleniti. Unde, quos esse
                            aperiam atque cum temporibus mollitia iusto sed
                            ullam tenetur consectetur accusantium. Esse!
                            Doloremque cumque maiores excepturi, voluptatem
                            facilis vel accusamus eius impedit velit similique
                            explicabo amet, ea accusantium exercitationem
                            consequuntur numquam minus beatae porro ex!
                            Laboriosam voluptas nesciunt reiciendis
                            reprehenderit, ratione culpa. Totam velit saepe
                            veniam cum vero laborum maxime nisi recusandae
                            voluptas commodi minima possimus facilis beatae
                            doloremque vel hic, dignissimos voluptatibus
                            asperiores, corporis sit cumque dolore eius deleniti
                            non! Accusamus? Perspiciatis iure quas, harum
                            exercitationem autem natus dolore voluptatibus et
                            repudiandae. Eligendi ut illo, provident quibusdam
                            sequi ipsum dicta laudantium odit harum minus est
                            numquam magnam quod, tenetur qui officiis?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;
