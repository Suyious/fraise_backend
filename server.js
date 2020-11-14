import express from "express";
import mongoose from "mongoose";
import Backgrounds from "./dbModel.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

const connection_url =
  "mongodb+srv://admim:fDfUjqliE9LghEyp@cluster0.nfq43.mongodb.net/fraisedb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//admin : fDfUjqliE9LghEyp

app.get("/", (req, res) => res.status(200).send("Hey low warld"));

app.get("/background/sync", (req, res) => {
  Backgrounds.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/background/new", (req, res) => {
  const dbBackground = req.body;

  Backgrounds.create(dbBackground, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log("listening on localhost:", port));
