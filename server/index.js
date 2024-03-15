import express from "express";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const product = [
	{
		id: 1,
		description:
			"Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Gray",
		price: 22499,
		quantity: 1,
	},
	{
		id: 2,
		description:
			"OnePlus Pad 29.49cm (11.61 inch) LCD Display, 12GB RAM,256GB Storage, MediaTek Dimensity 9000, Android 13.1, 144HZ Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet",
		price: 38499,
		quantity: 1,
	},
];
app.get("/", (req, res) => {
	res.send(product);
});
app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
