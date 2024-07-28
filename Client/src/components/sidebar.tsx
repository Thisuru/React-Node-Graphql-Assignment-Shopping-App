import React from "react";
import List from "@mui/material/List";
import { Scrollbar } from "./scrollbar";
import { Category } from "../types/types";
import { Box, ListItemButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

const StyledSidebar = styled(Box)`
	background-color: #e4ecf1;
	border: none;
	position: relative;
	width: ${SIDE_NAV_WIDTH}px;
	height: calc(100vh - ${TOP_NAV_HEIGHT}px);
	display: flex;
	flex-direction: column;
`;

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
	paddingLeft: theme.spacing(2.5),
	paddingRight: theme.spacing(2.5),
	paddingTop: theme.spacing(1.75),
	paddingBottom: theme.spacing(1.75),
	"&:hover": {
		backgroundColor: "rgba(0, 0, 0, 0.08)",
		"& a": {
			color: "black",
		},
	},
}));

const StyledLink = styled(Link)(() => ({
	textDecoration: "none",
	color: "#405D72",
	fontWeight: "bold",
}));

type SidebarProps = {
	categories: Category[];
	isLoading: boolean;
	error: any | null;
};

const Sidebar: React.FC<SidebarProps> = ({ categories, isLoading, error }) => (
	<StyledSidebar>
		<Scrollbar id="nav-scrollbar">
			<List>
				{isLoading ? (
					<Typography
						variant="body1"
						component="p"
					>
						Loading...
					</Typography>
				) : error ? (
					<Typography
						variant="body1"
						component="p"
					>
						Error: {error ? error.message : "An unknown error occurred"}
					</Typography>
				) : categories.length ? (
					categories[0].childCategories.map(({ name, urlPath }, index) => (
						<StyledListItemButton key={index}>
							<StyledLink
								to={`/${urlPath}`}
								key={index}
							>
								{name}
							</StyledLink>
						</StyledListItemButton>
					))
				) : (
					<Typography
						variant="body1"
						component="p"
					>
						No categories found.
					</Typography>
				)}
			</List>
		</Scrollbar>
	</StyledSidebar>
);

export default Sidebar;
