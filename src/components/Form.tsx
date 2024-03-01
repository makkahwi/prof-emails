"use client";

import { Fragment, useState } from "react";

export default function Form() {
  const [result, setResult] = useState("");

  const inputs = [
    {
      name: "name",
      label: "Person First + Last Name",
      required: true,
      regex: /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/,
    },
    { name: "domain", label: "Domain", required: true, regex: /^\S*$/ },
  ];

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
        >
          {inputs.map(({ label, name, required, regex }, i) => (
            <div className="input" key={i}>
              <label>{label}</label>
              <input name={name} required={required} pattern={String(regex)} />
            </div>
          ))}

          <button className="button" type="submit">
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
