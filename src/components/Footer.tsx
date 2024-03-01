export default function Footer() {
  return (
    <div className="container">
      <footer className="pt-3 mt-3">
        <hr />
        <p className="text-center text-muted">
          All Rights Reserved For{" "}
          <a href="https://suhaib.dev" target="_blank">
            Suhaib Ahmad
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
