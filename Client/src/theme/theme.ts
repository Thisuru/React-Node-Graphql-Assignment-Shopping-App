import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "Nunito Sans, sans-serif",
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {},
				contained: {
					backgroundColor: "#405D72", // Contained variant background color
					color: "#fff", // Contained variant text color
					"&:hover": {
						backgroundColor: "#758694", // Contained variant hover background color
					},
				},
				outlined: {
					borderColor: "#405D72", // Outlined variant border color
					color: "#405D72", // Outlined variant text color
					"&:hover": {
						borderColor: "#088395", // Outlined variant hover border color
						color: "#088395", // Outlined variant hover text color
					},
				},
			},
		},
	},
});

export default theme;
