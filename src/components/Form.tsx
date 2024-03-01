"use client";

import { Fragment, useState } from "react";

export default function Form() {
  const [result, setResult] = useState("");

  const inputs = [
    {
      name: "name",
      label: "Person Name",
      required: true,
      info: "Please only insert first and last name with only 1 space between, and no any other spaces.",
    },
    {
      name: "domain",
      label: "Domain",
      required: true,
      info: "Please stop @ domain extension (.com, .net), no / at end or anything else",
    },
  ];

  const generator = (name = "Suhaib Ahmad", userDomain = "hotmail.com") => {
    const domain = userDomain
      .replace("https://www.", "")
      .replace("http://www.", "")
      .replace("https://", "")
      .replace("http://", "")
      .replaceAll("/", "");
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

    setResult(names.join("; ") + ";");
  };

  return (
    <Fragment>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const values = inputs.reduce(
              (final, current) => ({
                ...final,
                [current.name]: (e.target as any)[current.name].value,
              }),
              { name: "", domain: "" }
            );

            generator(values.name, values.domain);
          }}
          className="row"
        >
          {inputs.map(({ label, name, required, info }, i) => (
            <div className="col-md-6 my-3" key={i}>
              <label className="form-label">{label}</label>

              <input className="form-control" name={name} required={required} />

              <small className="form-label text-danger">{info}</small>
            </div>
          ))}

          <button className="btn btn-dark col-md-12 my-3" type="submit">
            Generate
          </button>
        </form>
      </div>

      {result ? (
        <div className="margin">
          <h3 className="margin">Result</h3>
          <p>{result}</p>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
