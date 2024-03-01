import Form from "@/components/Form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h2 className="text-center">
          Professional Email Address
          <br /> Guesses Generator
          <br /> (PEAG)
        </h2>
      </div>

      <div className={styles.center}>
        <Form />
      </div>

      <div>
        All Rights Reserved For{" "}
        <a href="https://suhaib.dev" target="_blank">
          Suhaib Ahmad
        </a>{" "}
        {new Date().getFullYear()}
      </div>
    </main>
  );
}
