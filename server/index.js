const express = require('express');
const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

var chatSchema = new mongoose.Schema({
  message: String,
  step: String,
  location: String,
  clientId: String,
}, { timestamps: true });

chatSchema.plugin(mongoosastic)
var ChatModel = mongoose.model('Chat', chatSchema);

const connectOptions = {
  useFindAndModify: false,
  autoIndex: true, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  family: 4,
  useUnifiedTopology: true
};

mongoose.connect('mongodb://localhost/ze-experience', connectOptions);

app.get('/', (req, res) => {
  res.json({  message: "Server running." });
})

app.post('/message', (req, res) => {
  const { data } = req.body;
  ChatModel.create(data); 
  res.json({ success: true });
  console.log(`Received chat information: ${+(new Date())}`);
})

app.listen(3000, function(){
  console.log("Server running")
})