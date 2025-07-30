import Image from "next/image";
import Head from "next/head";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spacecadet | Ready. Set. Launch.</title>
        <meta name="description" content="Your mission control for the modern web." />
      </Head>

      <section className={styles.home}>
        <Image
          src="/space-logo.png"
          alt="Spacecadet Logo"
          width={300}
          height={300}
          className={styles.logo}
        />
        <h1>Welcome to Spacecadet.io</h1>
        <p>Your mission control for the modern web</p>
      </section>
    </>
  );
}




