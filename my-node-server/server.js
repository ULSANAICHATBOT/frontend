const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "https://2469-112-76-111-22.ngrok-free.app/chat/",
  })
);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
