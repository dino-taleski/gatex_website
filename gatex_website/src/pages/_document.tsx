import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* bootstrap */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                ></link>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                    crossOrigin="anonymous"
                    defer
                ></script>
                {/* font awesome  */}
                <script
                    src="https://kit.fontawesome.com/d61a840397.js"
                    crossOrigin="anonymous"
                    defer
                ></script>
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
