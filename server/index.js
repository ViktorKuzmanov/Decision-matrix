const path = require("path");
const express = require("express");
const { log } = require("console");
const app = express(); // create express app

app.use(express.urlencoded());
app.use(express.json());

let table = {
  "factors": [
      {
          "id":0,
          "name": "Semejstvo",
          "weight": 10,
          "scores": [
              7,
              10
          ]
      },
      {
          "id":1,
          "name": "Zabava",
          "weight": 7,
          "scores": [
              9,
              4
          ]
      },
      {
          "id":2,
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
        "id" :0,
        "name": "Skopje",
        "result" : 0
      },
      {
        "id" :1,
        "name": "Kavadarci",
        "result" : 0
      }
  ]
}
// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));

app.get('/table', (req,res) => {
  res.json(table);
})


app.post("/addNewFactor", (req, res) => {
  const { newFactor } = req.body;
  table.factors.push(newFactor)
  console.log(table)
  // ! tuka neli treba da a update result bazirano na noviot factor
  res.json(table);
})

app.post("/addNewOption", (req, res) => {
  const { newOption } = req.body;
  table.options.push(newOption)
  // add scores of new option (in factors)
  for(let i in table.factors) {
    table.factors[i].scores.push(1);
  }
  updateResultsInTable(table)
  res.json(table);
})

// ? Kako da a imenua route-ot nekako changeWeight ne e bash taman

app.post("/changeFactor", (req, res) => {
  const changedFactor = req.body.changedFactor;
  for(const i in table.factors) {
    if(table.factors[i].id === changedFactor.id) {
      table.factors[i] = changedFactor;
    }
  }
  updateResultsInTable(table);
  res.json(table);
})

app.post("/changeOptionName", (req,res) => {
  const { changedOption } = req.body;
  for(let i in table.options) {
    if(i === changedOption.id) {
      table.options[i] = changedOption;
    }
  }
})

function updateResultsInTable(table) {
  // Reset results to 0 because we will count again
  for(let i in table.options) {
    table.options[i].result = 0;
  }
  // Change the results with updated ones
  for(let i in table.factors) {
    const weight = table.factors[i].weight;
    for(let j in table.factors[i].scores) {
      const score = table.factors[i].scores[j];
      table.options[j].result += parseInt(weight * score)
    }
  } 
}

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
