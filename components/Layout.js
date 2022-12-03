import Head from "next/head";

export default function Layout({ title, description = "Next Portfolio App", children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:site_name" content={title} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {children}
        </>
    );
}
