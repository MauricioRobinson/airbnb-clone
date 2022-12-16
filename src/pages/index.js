import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        {/* Header navbar */}
        <Header />
        <Banner />
      </main>
    </div>
  );
}

