const express = require("express");
const { mockChatData } = require("./__mock__/live-stream-mock");
const { Comments } = require("./__mock__/reddit-data");
var cors = require("cors");

const port = 3005;
const app = express();
app.use(cors());
let startindex = 0,
  endindex = 10;
app.get("/getLiveStreamChat", (req, res) => {
  let chatdata = mockChatData.slice(startindex, endindex);

  if (endindex != mockChatData.length) {
    setTimeout(() => {
      console.log("test");
      res.json(chatdata);
    }, 5000);
    startindex = endindex;
    endindex = startindex + 10;
  } else {
    startindex = 0;
    endindex = 10;
  }
});
app.get("/getNestedComment", (req, res) => {
  res.json(Comments);
});
app.listen(port, () => {
  console.log(port);
});
