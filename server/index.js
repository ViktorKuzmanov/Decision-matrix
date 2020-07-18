const path = require("path");
const express = require("express");
const { log } = require("console");
const app = express(); // create express app

app.use(express.urlencoded());
app.use(express.json());

let table = {
  "factors": [
      {
          "id":"0",
          "name": "Semejstvo",
          "weight": 10,
          "scores": [
              7,
              10
          ]
      },
      {
          "id":"1",
          "name": "Zabava",
          "weight": 7,
          "scores": [
              9,
              4
          ]
      },
      {
          "id":"2",
          "name": "Prijateli",
          "weight": 8,
          "scores": [
              9,
              7
          ]
      }
  ],
  "options": [
      {
        "id" :"0",
        "name": "Skopje",
        "result" : "1"
      },
      {
        "id" :"1",
        "name": "Kavadarci",
        "result" : "3"
      }
  ]
}
// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));

app.get('/table', (req,res) => {
  res.json(table);
})

app.post("/changeWeight", (req, res) => {
  console.log(req.body)
  res.json({});
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
