import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="form-signin w-100 m-auto">
      <h2 className="text-center">
        Professional Email Address
        <br /> Guesses Generator
        <br /> (PEAG)
      </h2>

      <Form />

      <div className="container">
        <footer className="py-3 my-4">
          <hr />
          <p className="text-center text-body-secondary">
            All Rights Reserved For{" "}
            <a href="https://suhaib.dev" target="_blank">
              Suhaib Ahmad
            </a>{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
}
