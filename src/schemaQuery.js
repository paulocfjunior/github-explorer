/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
require("dotenv").config({ path: `${__dirname}/../.env.local` });
const fetch = require("node-fetch");
const fs = require("fs");

fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`
  },
  body: JSON.stringify({
    variables: {},
    query: `
    {
      __schema {
        types {
          kind
          name
          possibleTypes {
            name
          }
        }
      }
    }
    `
  })
})
  .then(result => result.json())
  .then(({ data }) => {
    console.log(data);
    const filteredData = data.__schema.types.filter(
      type => type.possibleTypes !== null
    );
    data.__schema.types = filteredData;
    fs.writeFileSync(
      "./src/graphql/fragmentTypes.json",
      JSON.stringify(data),
      err => {
        if (err) {
          console.error("Error writing fragmentTypes file", err);
        } else {
          console.log("Fragment types successfully extracted!");
        }
      }
    );
  });
