const express= require("express");
const cors= require("cors");
require("dotenv").config({path: "./.env"})
require("./db");
require("./User");
const app = express();

app.use(cors());
app.use(express.json());

const port= process.env.PORT 

app.listen(port , () => {
    console.log(`server is renning on ${port}...`);
})
/*
// Use model.findById() to search for a person by _id
const userIdToSearch = "64d05f8df2952d94b1311e17";

User.findById(userIdToSearch)
  .then((user) => {
    console.log("User found by ID:", user);
  })
  .catch((err) => {
    console.error(err);
  });

// Perform Classic Updates by Running Find, Edit, then Save
const userIdToUpdate = "64d05f8df2952d94b1311e16";

User.findById(userIdToUpdate)
  .then((user) => {
    if (!user) {
      console.log("User not found.");
      return;
    }

    user.favoriteFoods.push("Hamburger");
    return user.save();
  })
  .then((updatedUser) => {
    if (updatedUser) {
      console.log("Updated user:", updatedUser);
    }
  })
  .catch((err) => {
    console.error(err);
  });

// Perform New Updates on a Document Using model.findOneAndUpdate()
const userNameToUpdate = "Modou";

User.findOneAndUpdate({ name: userNameToUpdate }, { age: 63 }, { new: true })
  .then((updatedUser) => {
    console.log("Updated user by name:", updatedUser);
  })
  .catch((err) => {
    console.error(err);
  });

// Delete One Document Using model.findByIdAndRemove
const userIdToDelete = "64d05f8df2952d94b1311e18";

User.findByIdAndRemove(userIdToDelete)
  .then((removedUser) => {
    if (removedUser) {
      console.log("Removed user:", removedUser);
    } else {
      console.log("User not found.");
    }
  })
  .catch((err) => {
    console.error(err);
  });

// MongoDB and Mongoose - Delete Many Documents with model.remove()
const nameToDelete = "Bob";

User.deleteMany({ name: nameToDelete })
  .then((result) => {
    console.log(
      `Removed ${result.deletedCount} users with name "${nameToDelete}"`
    );
  })
  .catch((err) => {
    console.error(err);
  });

// Chain Search Query Helpers to Narrow Search Results
User.find({ favoriteFoods: "yassa" })
  .sort("name")
  .limit(2)
  .select("-age")
  .then((data) => {
    console.log("Filtered and sorted results:", data);
  })
  .catch((err) => {
    console.error(err);
  }); */