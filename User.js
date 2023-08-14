const mongoose = require("mongoose");
const Model = mongoose.Model;
let Schema = mongoose.Schema

// create schema
var personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
});

const User = mongoose.model('User', personSchema);

// Create and Save a Record of a Model
const newUser = new User({
  name: "rougui",
  age: 10,
  favoriteFoods: ["poulet", "Burger"],
});

newUser.save()
  .then(savedUser => {
    console.log("User saved:", savedUser);
  })
  .catch(error => {
    console.error("Error saving user:", error);
  });

  // Create Many Records with model.create()
const arrayOfPeople = [
  { name: "Fatou", age: 15, favoriteFoods: ["Thiep bou dieun", "fruit"] },
  { name: "samba", age: 34, favoriteFoods: ["yassa", "thiép"] },
  { name: "coach", age: 20, favoriteFoods: ["cbon", "chicken"] },
];

User.create(arrayOfPeople)
  .then((data) => {
    console.log("Multiple records saved successfully:", data);
  })
  .catch((err) => {
    console.error(err);
  });

// Use model.find() to search for people with a given name
User.find({ name: "rougui" })
  .then((user) => {
    console.log('User with name "rougui":', user);
  })
  .catch((err) => {
    console.error(err);
  });

// Use model.findOne() to find a person with a specific favorite food
const foodToSearch = "poulet";

User.findOne({ favoriteFoods: foodToSearch })
  .then((user) => {
    console.log(`User who likes ${foodToSearch}:`, user);
  })
  .catch((err) => {
    console.error(err);
  });


// Use model.findById() to search for a person by _id
const userIdToSearch = "64da354dced65431f64e9c32";

User.findById(userIdToSearch)
  .then((user) => {
    console.log("User found by ID:", user);
  })
  .catch((err) => {
    console.error(err);
  });

// Perform Classic Updates by Running Find, Edit, then Save
const userIdToUpdate = "64da3fcfd594f42320c0bdc5";

User.findById(userIdToUpdate)
  .then((user) => {
    if (!user) {
      console.log("User not found.");
      return;
    }

    user.favoriteFoods.push("yassa");
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
const userNameToUpdate = "Samba";

User.findOneAndUpdate({ name: userNameToUpdate }, { age: 34 }, { new: true })
  .then((updatedUser) => {
    console.log("Updated user by name:", updatedUser);
  })
  .catch((err) => {
    console.error(err);
  });

// Delete One Document Using model.findByIdAndRemove
const userIdToDelete = "64da3fcfd594f42320c0bdc8";

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
const nameToDelete = "Fatou";

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
  }); 

module.exports = User;