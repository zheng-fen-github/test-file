const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(fileUpload());

app.post("/upload", (req, res) => {
  console.log("upload file");
  console.log(req.files);
  if (req.files === null) {
    return res.status(404).json("no file");
  }
  const file = req.files.file;
  file.mv(`${__dirname}/store/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `${file.name}` });
  });
});

app.get("/", (req, res) => {
  //    console.log(req.params,id +'.jpg');
  console.log(path.join(__dirname, "/store"));
  res.sendFile(path.join(__dirname, "/store", "like (2).jpg"));
});

// this is a zhushi

app.listen(4040, console.log("server is 4040"));
