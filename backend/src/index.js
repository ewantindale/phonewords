const express = require("express");

const main = async () => {
  const app = express();

  app.get("/", async (req, res) => {
    res.send("Hello from Express");
  });

  app.listen(4000, () => {
    console.log("Server is listening on http://localhost:4000");
  });
};

main().catch((error) => {
  console.error(error);
});
