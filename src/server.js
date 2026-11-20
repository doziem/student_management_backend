const express = require("express");

require("dotenv").config();

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());

app.get("/", (_request, response) => {
  response.type("text").send("Student management backend is running.\n");
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
