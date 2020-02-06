"use strict";
const cors = require('cors');
const express = require('express');
const router = express.Router();
// create the Express app
const app = express();
// Enable CORS Requests
app.use(cors());

app.use(express.json());
app.use("/api", router);

const data = require("./data");

router.get("/:id", (req, res) => {
  const charmNum = req.params.id - 1;
    res.json({
        id: charmNum + 1,
        name: data[charmNum].name,
        description: data[charmNum].description,
        notches: data[charmNum].notches
      })
});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});