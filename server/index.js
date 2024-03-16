import express from "express";
import tablets from "./tablets.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tablets", tablets);
app.get("/", (req, res) => {
	res.send("Hello");
});

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
