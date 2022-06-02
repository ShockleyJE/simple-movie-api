const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

let movies = {
  1: {
    name: "21 jump street",
    release_year: 2012,
    directors: ["Phil Lord", "Christopher Miller"],
    stars: ["Jonah Hill", "Channing Tatum", "Ice Cube"],
  },
  2: {
    name: "House",
    release_year: 1977,
    directors: ["Nobuhiko Ôbayashi"],
    stars: ["Kimiko Ikegami", "Miki Jinbo", "Kumiko Ohba"],
  },
  unknown: {
    name: "unknown",
    release_year: 0,
    directors: ["unknown"],
    stars: ["unknown"],
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:id", (request, response) => {
  const id = parseInt(request.params.name);
  if (movies[id]) {
    response.json(movies[id]);
  } else {
    response.json(movies["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
