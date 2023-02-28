import Main from "@/Layout/Main";

export default function MyApp({ Component, pageProps }) {
    return (
        <Main>
            <Component {...pageProps} />
        </Main>
    )
}