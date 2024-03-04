import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Collections from "@/components/collections/Collections";
import ProductCard from "@/components/productCard/ProductCard";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

type Data = {
    id: number;
    image: string;
    title: string;
    productType: string;
    price: number;
    reducedPrice: number;
    isAvailable: boolean;
    isPublished: boolean;
};

type Props = {
    data: Data[];
};

export default function Home({ data }: Props) {
    console.log(data);
    return (
        <>
            <Head>
                <title>Dev Gatex</title>
                <meta name="description" content="Gatex Trikotaza" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{ width: "100%" }}>
                <p
                    style={{
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: "30px",
                    }}
                >
                    dev
                </p>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img
                                src="./images/11a.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./images/15a.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item active">
                            <img
                                src="./images/5a.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon "
                            style={{ padding: "20px" }}
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon padding"
                            style={{ padding: "20px" }}
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
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
                    CATEGORIES
                </p>
                <Collections />
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
                    FEATURED PRODUCTS
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: "25px",
                        paddingInline: "80px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                    }}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                {/* render data here from BE */}
                {/* <p
                    style={{
                        textAlign: "center",
                        fontSize: "34px",
                        fontWeight: "700",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                    }}
                >
                    FEATURED PRODUCTS
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: "10px",
                        paddingInline: "10px",
                    }}
                >
                    {data.map((data) => {
                        return (
                            <ProductCard
                                key={data.id}
                                image={data.image}
                                title={data.title}
                                price={data.price}
                            />
                        );
                    })}
                </div> */}
                {/* render data here BE */}
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
                    HOW IT WORKS
                </p>
                <div className={styles.how_it_works}>
                    <div>
                        <p className={styles.steps_style}>1.</p>
                        <p className={styles.steps_text}>Add items to cart</p>
                    </div>
                    <div>
                        <p className={styles.steps_style}>2.</p>
                        <p className={styles.steps_text}>Add delivery info</p>
                    </div>
                    <div>
                        <p className={styles.steps_style}>3.</p>
                        <p className={styles.steps_text}>Pay upon delivery</p>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}

// export async function getServerSideProps() {
//     try {
//         const res = await fetch("http://localhost:5002/products");
//         const data: Data = await res.json();

//         return {
//             props: {
//                 data,
//             },
//         };
//     } catch (error) {
//         console.log(error);
//     }
// }
