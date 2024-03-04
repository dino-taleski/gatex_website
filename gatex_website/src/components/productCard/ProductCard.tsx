import React from "react";
import styles from "@/components/productCard/productCard.module.css";

// type ProductType = {
//     id: number;
//     image: string;
//     title: string;
//     productType: string;
//     price: number;
//     reducedPrice: number;
//     isAvailable: boolean;
//     isPublished: boolean;
// };

const ProductCard: React.FC = () => {
    return (
        <>
            <div className={styles.main_card_div}>
                <div>
                    <img
                        style={{ width: "100%", borderRadius: "10px" }}
                        src={"./cats/duks2.jpg"}
                        alt="hoodie product"
                    />
                </div>
                <div className={styles.product_card_content}>
                    <p className={styles.product_card_title}>Hoodie</p>
                    <p className={styles.product_card_price}>850 ден.</p>
                </div>
                <button className={styles.card_button}>ПОВЕЌЕ</button>
            </div>
        </>
    );
};

export default ProductCard;
