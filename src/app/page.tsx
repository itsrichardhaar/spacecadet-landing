import Image from "next/image";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <Image
        src="/space-logo.png"
        alt="Spacecadet Logo"
        width={300}
        height={300}
        className={styles.logo}
      />
      <h1>Welcome to Spacecadet.io</h1>
      <p>Your modern web solution, built with Next.js.</p>
    </section>
  );
}



