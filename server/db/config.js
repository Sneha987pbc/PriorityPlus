const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://snehak:jojo987123@cluster2.wwswrri.mongodb.net/todoapp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
);

mongoose.connection.on("error", (err) => {
  console.log("Connection failed");
});
mongoose.connection.on("connected", (connected) => {
  console.log("Connected with database ");
});