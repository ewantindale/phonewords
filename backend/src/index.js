const express = require("express");

const main = async () => {
  const app = express();
  app.use(express.json());

  app.post("/", async (req, res) => {
    const { numericString } = req.body;

    res.json({ response: numericString });
  });

  app.listen(4000, () => {
    console.log("Server is listening on http://localhost:4000");
  });
};

main().catch((error) => {
  console.error(error);
});
