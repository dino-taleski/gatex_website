import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Collections from "@/components/collections/Collections";
import ProductCard from "@/components/productCard/ProductCard";

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
                <title>Gatex</title>
                <meta name="description" content="Gatex Trikotaza" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{ width: "100%" }}>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="./images/5a.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
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
                <Collections />
                <p
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
