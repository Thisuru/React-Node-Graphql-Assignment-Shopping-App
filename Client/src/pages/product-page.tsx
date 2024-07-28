import React from "react";
import ProductList from "../components/product-list";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const PageContainer = styled(Box)({
	paddingLeft: "40px",
	paddingRight: "40px",
	paddingTop: "36px",
	paddingBottom: "36px",
});

export const ProductPage: React.FC = () => {
	return (
		<PageContainer>
			<ProductList />
		</PageContainer>
	);
};
