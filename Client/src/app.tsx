import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

export const App: React.FC = () => {
	const element = useRoutes(routes);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{element}
		</ThemeProvider>
	);
};
