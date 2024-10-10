import express from "express"; 
const port = process.env.PORT || 3000;
const app = express(); 

app.use(express.json()); 

app.get("/api", (_req, res) => {
    console.log("someone pinged here."); 
    res.status(200).send("Hello, World!");
});

app.use("*", (_req, res) => {
    res.status(404).send("Error: Not found.");
});

app.listen(port, () => console.log(`App started! Listening on Port ${port}`));