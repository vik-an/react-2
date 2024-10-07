const express = require("express");
const app = express();

app.use(express.json());

const { connectToDb, PORT } = require("./db");

app.get("/jou", (req, res) => {
  res.sendFile(__dirname + "/index.html");
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
  businessVar: [
    {
      id: 847239,
      liked: false,
      category: "Cleaning",
      name: "Valau už jus",
      service: "Namų valymas po remonto",
      person: "Antanas Antanauskas",
      address: "Lazdynėlių 16, Vilnius",
      url: "https://thumbs.dreamstime.com/t/construction-cleaning-service-dust-removal-vacuum-cleaner-young-woman-cleaning-removing-construction-dust-vacuum-106266434.jpg",
    },
    {
      id: 193857,
      liked: false,
      category: "Painting",
      name: "Spalvingas gyvenimas",
      service: "Tapyba ant sienų",
      person: "Ema Perema",
      address: "Saltoniškių g. 30, Vilnius",
      url: "https://thumbs.dreamstime.com/t/world-bansky-exhibition-paris-graffiti-art-bansky-graffiti-art-world-bansky-155375632.jpg",
    },

    {
      id: 506284,
      liked: false,
      category: "Painting",
      name: "Visos vaivorykštės spalvos",
      service: "interjero dažymo darbai",
      person: "Saulius Teptukas",
      address: "Šv.Stepono g. 11, Vilnius",
      url: "https://thumbs.dreamstime.com/t/painter-painting-wall-paint-roller-back-view-white-dungarees-blue-t-shirt-cap-gloves-copy-space-66063620.jpg",
    },

    {
      id: 921740,
      liked: true,
      category: "Cleaning",
      name: "Pedantas",
      service: "Privačių valdų tvarkymas",
      person: "Valė Valentinaitė",
      url: "https://thumbs.dreamstime.com/t/woman-doing-chores-cleaning-bathroom-home-26688685.jpg",
      address: "Verkių g. 1, Vilnius",
    },
    {
      id: 921890,
      liked: true,
      category: "Shifting",
      name: "Vėžikas",
      service: "Perkraustimo paslaugos",
      person: "Jeronimas Ratauskas",
      url: "https://img.freepik.com/free-photo/delivery-man-with-clipboard_23-2148590673.jpg?ga=GA1.1.1377076620.1703272892&semt=ais_hybrid",
      address: "Sudervė g. 1, Vilnius",
    },
    {
      id: 933340,
      liked: true,
      category: "Electric",
      name: "Tebunie šviesa",
      service: "Elektros instaliacijos darbai",
      person: "Saulius Žaibauskas",
      url: "https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-18335.jpg?ga=GA1.1.1377076620.1703272892&semt=ais_hybrid",
      address: "Savanorių pr. 55, Kaunas",
    },
    {
      id: 921235,
      liked: true,
      category: "Cleaning",
      name: "Atmatyk",
      service: "Langų daužymas",
      person: "Skaidrius Muštukas",
      url: "https://img.freepik.com/free-photo/medium-shot-people-cleaning-building_23-2150454559.jpg?ga=GA1.1.1377076620.1703272892&semt=ais_hybrid",
      address: "Šermukšnių g. 8, Mažeikia",
    },
    {
      id: 929565,
      liked: true,
      category: "Plumping",
      name: "Tebėga",
      service: "Atkimšimas",
      person: "Rolandas Matonis",
      url: "https://img.freepik.com/free-photo/medium-shot-people-cleaning-building_23-2150454559.jpg?ga=GA1.1.1377076620.1703272892&semt=ais_hybrid",
      address: "Šermukšnių g. 8, Radviliškis",
    },
    {
      id: 944475,
      liked: true,
      category: "Cleaning",
      name: "Valymas",
      service: "Grindų plovimas",
      person: "Aurelijus Rosvaldas",
      url: "https://img.freepik.com/free-photo/medium-shot-people-cleaning-building_23-2150454559.jpg?ga=GA1.1.1377076620.1703272892&semt=ais_hybrid",
      address: "Šalnos g. 8, Žaizdriai",
    },
    {
      id: 922175,
      liked: true,
      category: "Cleaning",
      name: "Be dulkių",
      service: "Paviršių valymas",
      person: "Guostė Trepinaitė",
      url: "https://img.freepik.com/free-photo/medium-shot-people-cleaning-building_23-2150454559.jpg?ga=GA1.1.1377076620.1703272892&semt=ais_hybrid",
      address: "Šermukšnių g. 8, Šiauliai",
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
