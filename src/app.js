import express from "express";

const app = express();

// melakukan request http get
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/name", (req, res) => {
  res.send(`hello ${req.query.name}`);
});
app.get("/*", (req, res) => {
  res.sendStatus(404);
});

// gunakan method listen untuk menjalankan server
const port = 6060;
app.listen(port, () => {
  console.log("server berjalan pada port : " + port);
});
