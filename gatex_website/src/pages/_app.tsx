import Header from "@/components/header/Header";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/custom-carousel.css";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
