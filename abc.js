const express = require("express");
const app = express();

const csFacts = [
  "The first computer programmer was Ada Lovelace in the 1800s.",
  "The first computer bug was an actual moth stuck in a relay.",
  "Java was originally called Oak.",
  "The first 1GB hard drive was announced in 1980 and weighed 550 pounds.",
  "Python is named after 'Monty Python', not the snake.",
  "The first website is still online at info.cern.ch.",
  "Google was originally called BackRub.",
  "The QWERTY keyboard was designed to slow you down, not speed you up.",
  "Email existed before the World Wide Web.",
  "Alan Turing is considered the father of computer science.",
  "CAPTCHA stands for 'Completely Automated Public Turing test to tell Computers and Humans Apart'.",
  "The first domain ever registered was Symbolics.com in 1985.",
  "Ctrl+Alt+Del was originally used only by IBM developers.",
  "The first computer game was 'Spacewar!' created in 1962.",
  "The original iPhone had less computing power than a pocket calculator today."
];

app.post("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * csFacts.length);
  const randomFact = csFacts[randomIndex];
  res.send(randomFact);
});


app.listen(8080, () => {
  console.log("🚀 Server started on http://localhost:8080");
});
