const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get('/', (req, res) => {
  res.json({  message: "Server running." });
})

app.listen(3000, function(){
  console.log("Server running")
})