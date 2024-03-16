import express from "express";
const router = express.Router();

const tablets = [
	{
		id: 1,
		description:
			"Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Gray",
		price: 22499,
		quantity: 1,
		rating: 4.5,
	},
	{
		id: 2,
		description:
			"OnePlus Pad 29.49cm (11.61 inch) LCD Display, 12GB RAM,256GB Storage, MediaTek Dimensity 9000, Android 13.1, 144HZ Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet",
		price: 38499,
		quantity: 1,
		rating: 4.5,
	},
	{
		id: 3,
		description:
			"Apple iPad (10th Generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Silver",
		price: 36900,
		quantity: 1,
		rating: 4.5,
	},
];

router.get("/", (req, res) => {
	res.send(tablets);
});

router.get("/:id", (req, res) => {
	const tablet = tablets.find((t) => t.id === parseInt(req.params.id));
	if (!tablet) {
		res.status(404).send("The mobile with the given ID was not found");
	}
	res.send(tablet);
});

export default router;
