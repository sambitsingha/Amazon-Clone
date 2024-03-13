/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"gradient-bg":
					"linear-gradient(to bottom, #4178ce, #8296da, #b2b7e6, #dbdaf2, #ffffff)",
				"new-gradient-bg":
					"linear-gradient(to bottom, #132962, #555787, #8d8bae, #c6c3d6, #ffffff)", // New gradient
			}),
		},
	},
	plugins: [require("flowbite/plugin")],
};
