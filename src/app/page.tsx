import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  const generator = (name = "Suhaib Ahmad", userDomain = "hotmail.com") => {
    const domain = userDomain
      .replace("https://www.", "")
      .replace("http://www.", "")
      .replace("https://", "")
      .replace("http://", "");
    const firstName = name.split(" ")[0];
    const lastName = name.replace("-", "").split(" ")[1];
    const lastModName = name.replace("al", "").split(" ")[1];

    const names = [];

    // Full Name
    names.push(name.replace(" ", "") + "@" + domain);
    names.push(name.replace(" ", ".") + "@" + domain);
    names.push(name.replace(" ", "-") + "@" + domain);
    names.push(name.replace(" ", "_") + "@" + domain);

    // First Name
    names.push(firstName + "@" + domain);

    names.push(firstName[0] + "" + lastName + "@" + domain);
    names.push(firstName[0] + "." + lastName + "@" + domain);
    names.push(firstName[0] + "-" + lastName + "@" + domain);
    names.push(firstName[0] + "_" + lastName + "@" + domain);

    names.push(lastName + "" + firstName[0] + "@" + domain);
    names.push(lastName + "." + firstName[0] + "@" + domain);
    names.push(lastName + "-" + firstName[0] + "@" + domain);
    names.push(lastName + "_" + firstName[0] + "@" + domain);

    names.push(firstName[0] + "" + lastModName + "@" + domain);
    names.push(firstName[0] + "." + lastModName + "@" + domain);
    names.push(firstName[0] + "-" + lastModName + "@" + domain);
    names.push(firstName[0] + "_" + lastModName + "@" + domain);

    names.push(lastModName + "" + firstName[0] + "@" + domain);
    names.push(lastModName + "." + firstName[0] + "@" + domain);
    names.push(lastModName + "-" + firstName[0] + "@" + domain);
    names.push(lastModName + "_" + firstName[0] + "@" + domain);

    // Last Name
    names.push(lastName + "@" + domain);
    names.push(lastModName + "@" + domain);

    names.push(firstName + "" + lastName[0] + "@" + domain);
    names.push(firstName + "." + lastName[0] + "@" + domain);
    names.push(firstName + "-" + lastName[0] + "@" + domain);
    names.push(firstName + "_" + lastName[0] + "@" + domain);

    names.push(lastName[0] + "" + firstName + "@" + domain);
    names.push(lastName[0] + "." + firstName + "@" + domain);
    names.push(lastName[0] + "-" + firstName + "@" + domain);
    names.push(lastName[0] + "_" + firstName + "@" + domain);

    names.push(firstName + "" + lastModName[0] + "@" + domain);
    names.push(firstName + "." + lastModName[0] + "@" + domain);
    names.push(firstName + "-" + lastModName[0] + "@" + domain);
    names.push(firstName + "_" + lastModName[0] + "@" + domain);

    names.push(lastModName[0] + "" + firstName + "@" + domain);
    names.push(lastModName[0] + "." + firstName + "@" + domain);
    names.push(lastModName[0] + "-" + firstName + "@" + domain);
    names.push(lastModName[0] + "_" + firstName + "@" + domain);

    console.log(names.join("; "));
  };

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
        <h1 className="text-center">
          Professional Email Address
          <br /> Guesses Generator
        </h1>
      </div>

      <div className={styles.center}>
        <form>
          <div className="input">
            <label>Person First + Last Name</label>
            <input name="name" />
          </div>

          <div className="input">
            <label>Domain</label>
            <input name="domain" />
          </div>
        </form>
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
