require("./db/config.js");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// User model
// for signup
const UserModel = require("./Schema/signup");

app.post("/signup", async (req, res) => {
  let userName = req.body.userName;
  let userEmail = req.body.userEmail;
  let userPassword = req.body.userPassword;

  const user = new UserModel({
    userName: userName,
    userEmail: userEmail,
    userPassword: userPassword,
  });
  try {
    // save return promise
    let saveResult = await user.save();
    // console.log("Save Response: ",saveResult)
    res.send(saveResult);
  } catch (e) {
    console.log(e);
    res.send("Error is there");
  }
});

// for signin

app.post("/login", async (req, res) => {
  let userLname = req.body.userLname;
  let userLpassword = req.body.userLpassword;

  let result = await UserModel.findOne({
    userName: userLname,
    userPassword: userLpassword,
  });
  res.send(result);
});

// TodoModel

const TodoModel = require("./Schema/todo.js");
app.post("/yourtodolist", async (req, res) => {
  let userTitle = req.body.userTitle;
  let userDescription = req.body.userDescription;
  let userID = req.body.userID;
  const todo = new TodoModel({
    userTitle: userTitle,
    userDescription: userDescription,
    userID: userID
  });

  try {
    let saveTodo = await todo.save();
    // res.send(saveTodo)
    res.send(saveTodo);
  } catch (e) {
    console.log(e);
    res.send("Error is there");
  }
});
// const localData = JSON.parse(localStorage.getItem("userInfo"));
app.get(`/all`, async (req, res) => {
  
  let userID = req.query.userID;
  console.log(userID+"userid")
  let alltodo;
  if(userID == "adminsneha")
     alltodo = await TodoModel.find({});
    else
  alltodo = await TodoModel.find({userID:userID});
  res.send(alltodo);
});

app.put("/update", async (req, res) => {
  let updatedtitle = req.body.newtitle;
  let updatedDescription = req.body.newDescription;
  let id = req.body.id;

  let result = await TodoModel.find({ _id: id });
  result[0].userTitle = updatedtitle;
  result[0].userDescription = updatedDescription;
  let saveResult = await result[0].save();
  res.send(saveResult);
});

app.delete("/delete/:id",async (req,res) => {
  let id =  req.params.id;

  let result = await TodoModel.findByIdAndDelete({_id: id});
  res.send(result);
})

app.listen(5002, () => {
  console.log("OK");
});
