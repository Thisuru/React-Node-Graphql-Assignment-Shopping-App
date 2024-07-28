import React from "react";
import { styled } from "@mui/system";
import { Article } from "../types/types";
import { Box, Button, Typography } from "@mui/material";

interface ArticleCardProps {
	article: Article;
}

const StyledBox = styled(Box)({
	padding: "8px",
	display: "flex",
	flexDirection: "column",
	border: "1px solid #758694",
	borderRadius: "5px",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	"&:hover": {
		border: "1px solid #088395",
	},
});

const StyledImage = styled("img")({
	width: "100%",
	height: "auto",
	borderRadius: "5px",
});

const StyledNameTypography = styled(Typography)({
	fontSize: "16px",
	fontWeight: "500",
	marginTop: "4px",
});

const StyledPriceTypography = styled(Typography)({
	fontSize: "16px",
	fontWeight: "700",
});

const StyledButton = styled(Button)({
	textTransform: "none",
	marginTop: "8px",
});

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "LKR",
	});

	const price = formatter.format(article.prices.value / 100);

	return (
		<StyledBox>
			<StyledImage
				src={article.images[0].path}
				alt={article.name}
			/>
			<StyledNameTypography variant="h6">{article.name}</StyledNameTypography>
			<StyledPriceTypography variant="h6">{price}</StyledPriceTypography>
			<StyledButton
				variant="outlined"
				color="primary"
			>
				Add to cart
			</StyledButton>
		</StyledBox>
	);
};

export default ArticleCard;
