const express = require("express");

const main = async () => {
  const app = express();
  app.use(express.json());

  app.post("/", (req, res) => {
    const { numericString } = req.body;

    if (numericString.length < 1) {
      res
        .status(400)
        .json({ response: "Input string must be at least 1 character" });
      return;
    }

    const isNumber = /^\d+$/.test(numericString);

    if (!isNumber) {
      res
        .status(400)
        .json({ response: "Input string can only contain numbers" });
      return;
    }

    const number = numericString.split("").map((n) => parseInt(n));

    res.json({ response: number });
  });

  app.listen(4000, () => {
    console.log("Server is listening on http://localhost:4000");
  });
};

main().catch((error) => {
  console.error(error);
});
