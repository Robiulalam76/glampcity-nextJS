import Main from "@/Layout/Main";
import '../app/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Main>
            <Component {...pageProps} />
        </Main>
    )
}