import ProductCard from "@/components/productCard/ProductCard";
import React from "react";
import styles from "@/styles/Shop.module.css";

const Shop = () => {
    return (
        <>
            <div className={styles.page_layout}>
                <div className={styles.filters}>
                    <div>
                        <p style={{ fontSize: "24px", fontWeight: "600" }}>
                            FILTER BY PRODUCTS
                        </p>
                        <ul className={styles.product_filter}>
                            <li>ДУКСЕРИ</li>
                            <li>T-SHIRT</li>
                            <li>POLO</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{ fontSize: "24px", fontWeight: "600" }}>
                            FILTER BY SIZES
                        </p>
                        <ul className={styles.product_filter}>
                            <li>L</li>
                            <li>XL</li>
                            <li>XXL</li>
                        </ul>
                    </div>
                </div>
                <div
                    style={{
                        paddingInline: "10px",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "30px",
                    }}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    );
};

export default Shop;
