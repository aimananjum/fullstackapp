import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "joke title", content: "content of joke" },
    { id: 2, title: "joke title", content: "content of joke" },
    { id: 3, title: "joke title", content: "content of joke" },
    { id: 4, title: "joke title", content: "content of joke" },
    { id: 5, title: "joke title", content: "content of joke" },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("LISTNING ON PORT ", PORT);
});
