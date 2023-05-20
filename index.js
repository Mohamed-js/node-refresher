import fetch from "node-fetch";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("I'm a refresher, and I'm working...!");
});

app.get("/refresh", (req, res) => {
  let counter = 0;
  refreshApps(counter);
});

app.listen(3000, () => console.log(`Listening on port ${3000}`));

async function refreshApps(counter) {
  while (true) {
    try {
      sleep(2000);
      await fetch("https://sellex-store.onrender.com/");
      console.log("Refreshed SellEx store");
    } catch (e) {
      console.log(e);
    }
    try {
      sleep(2000);
      await fetch("https://zippy-bronzed-shingle.glitch.me/asd");
      console.log("Refreshed Pets Socket");
    } catch (e) {
      console.log(e);
    }
    try {
      sleep(2000);
      await fetch("https://computek.onrender.com/users/sign_in");
      console.log("Refreshed Computech");
    } catch (e) {
      console.log(e);
    }
    try {
      sleep(2000);
      await fetch("https://workout-49bf.onrender.com/");
      console.log("Refreshed Workout");
    } catch (e) {
      console.log(e);
    }
    try {
      sleep(2000);
      await fetch("http://localhost:3000");
      console.log("Refreshed self");
    } catch (e) {
      console.log(e);
    }
    console.log(`Refreshed ${++counter} times`);
    sleep(10000);
  }
}

async function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
