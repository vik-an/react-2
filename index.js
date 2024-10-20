const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
//const Categories = require("./src/components/consts/Category");

app.use(express.json());
const UserModel = require("./models/UserModel");
const Business = require("./models/Business");

const { connectToDb, PORT } = require("./db");

//////////
//  veikia, bet dabar nereikialingas
// fs.readFile("./src/components/consts/Business.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("business:", data);
// });

/////////

app.get("/register", async (req, res) => {
  const User = req.body;
  res.json(UserModel);

  console.log(User);
});

app.get("/businesses", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses", error: err });
  }
  res.sendFile(__dirname + "/src/components/pages/simple.html");
});

app.post("/businesses", async (req, res) => {
  const business = req.body;

  try {
    const categoryExists = await Category.findOne({ name: business.category });
    if (!categoryExists) {
      return res.status(400).json({
        message: "Failed to add business: specified category does not exist.",
      });
    }

    const newBusiness = new Business(business);

    const savedBusiness = await newBusiness.save();
    res.status(201), json(savedBusiness);
  } catch (err) {
    res.status(500).json({
      message: "Server error while adding business.",
      error: err.message,
    });
  }
});

app.post("/category", (req, res) => {
  const newCategory = { id: data.categories.length + 1, ...req.body };
  data.categories.push(newCategory);
  res.status(201).json(newCategory);
});

app.get("/category", (req, res) => {
  res.json(data.categories);
});

const data = {
  categories: [
    {
      id: 1,
      name: "Cleaning",
      url: "https://img.icons8.com/?size=100&id=8088&format=png&color=000000",
      color: "purple",
    },
    {
      id: 2,
      name: "Repair",
      url: "https://img.icons8.com/?size=100&id=59827&format=png&color=000000",
      color: "grey",
    },
    {
      id: 3,
      name: "Painting",
      url: "https://img.icons8.com/?size=100&id=8141&format=png&color=000000",
      color: "green",
    },
    {
      id: 4,
      name: "Shifting",
      url: "https://img.icons8.com/?size=100&id=7776&format=png&color=000000",
      color: "brown",
    },
    {
      id: 5,
      name: "Plumping",
      url: "https://img.icons8.com/?size=100&id=24925&format=png&color=000000",
      color: "orange",
    },
    {
      id: 6,
      name: "Electric",
      url: "https://img.icons8.com/?size=100&id=9094&format=png&color=000000",
      color: "blue",
    },
  ],
};

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`db Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
//const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
  console.log(`YES! Server listening on port ${port}`);
});
