import Head from "next/head";
import { HomePage } from "../src/components/home/home-page";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>AMZ Buyers Guide</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/amzicon.png"
        />
      </Head>

      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { blogs_categories } = await import("/data/data.json");
  return {
    props: {
      data: blogs_categories,
    },
  };
}
