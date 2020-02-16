const express = require("express");
const app = express();
app.use(express.json())

require("./mongodb");

app.use("/", require("./routes/routes"));

app.listen("3010", function() {
  console.log("Yay, i work!!");
});

/*
Needed Apis -
1. Search history - POST, PUT, GET, DELETE, DELETE ALL
2. Bookmarked videos - POST, PUT, GET, DELETE, DELETE ALL
3. Played videos - POST, PUT, GET, DELETE, DELETE ALL
4. User data - POST, PUT, GET, DELETE, DELETE ALL
*/