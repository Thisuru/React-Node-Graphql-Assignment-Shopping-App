import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const StyledFooterBox = styled(Box)({
	backgroundColor: "#405D72",
	color: "white",
	paddingTop: "16px",
	paddingBottom: "16px",
	textAlign: "center",
	width: "100%",
});

const Footer: React.FC = () => {
	return (
		<StyledFooterBox>
			<Typography variant="body2">
				&copy; {new Date().getFullYear()} Your Company. All rights reserved.
			</Typography>
		</StyledFooterBox>
	);
};

export default Footer;
