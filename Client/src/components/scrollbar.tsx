import SimpleBar from "simplebar-react";
import { styled } from "@mui/material/styles";

const TOP_NAV_HEIGHT = 100;

export const Scrollbar = styled(SimpleBar)(() => ({
	height: `calc(100% -  ${TOP_NAV_HEIGHT}px)`,
	"& .simplebar-content": {
		height: "100%",
	},
	"& .simplebar-scrollbar:before": {
		background: "var(--nav-scrollbar-color)",
	},
	overflowY: "auto",
	overflowX: "hidden",
	paddingTop: "20px",
}));
