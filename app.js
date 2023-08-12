// Create and Save a Record of a Model
const mongoose = require("mongoose");
const User = require("./User"); // Make sure the path to the User model is correct

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB URL)
mongoose.connect("mongodb://localhost/mongodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create and Save a Record of a Model
const newUser = new User({
  name: "rougui",
  age: 10,
  favoriteFoods: ["poulet", "Burger"],
});
/*
newUser.save()
  .then(savedUser => {
    console.log("User saved:", savedUser);
  })
  .catch(error => {
    console.error("Error saving user:", error);
  });


// Create Many Records with model.create()
const arrayOfPeople = [
  { name: "Fatou", age: 15, favoriteFoods: ["Thiep bou dieun", "yassa"] },
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
  });*/
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