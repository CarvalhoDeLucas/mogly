const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sign", (req, res) => {
  const email = "lucas@gmail.com";
  const password = "123";

  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: "Lucas",
      email,
      role: ["sysAdmin"],
    };

    const token = jwt.sign({ data }, "SECRET", {
      expiresIn: 300000,
    });

    return res.json({ token });
  }

  res.status(500).json({ message: "Usuário ou senha incorreta" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});
