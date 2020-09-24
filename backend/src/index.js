const express = require("express");

const main = async () => {
  const app = express();
  app.use(express.json());

  app.post("/", async (req, res) => {
    const { numericString } = req.body;

    const isNumber = /^\d+$/.test(numericString);

    if (!isNumber) {
      res
        .status(400)
        .json({ response: "Input string can only contain numbers" });
      return;
    }

    res.json({ response: numericString });
  });

  app.listen(4000, () => {
    console.log("Server is listening on http://localhost:4000");
  });
};

main().catch((error) => {
  console.error(error);
});
