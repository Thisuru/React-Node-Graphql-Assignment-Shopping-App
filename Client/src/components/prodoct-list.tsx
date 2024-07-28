import React, { useState, useEffect } from "react";
import { fetchProductData } from "../utils/api";
import ArticleCard from "./article-card"; // Import ArticleCard component
import { Category } from "../types/types";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({});
const StyledLoadingTypography = styled(Typography)({});
const StyledErrorTypography = styled(Typography)({});
const StyledSearchTypography = styled(Typography)({});
const StyledTotalArticlesTypography = styled(Typography)({
	color: "#405D72",
	fontWeight: "600",
	marginBottom: "16px",
});
const StyledDivider = styled(Divider)({
	marginBottom: "24px",
});
const StyledGrid = styled(Grid)();

const ProductList: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState("");

	const isError = (error: unknown): error is Error => {
		return error instanceof Error;
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setError(null);

			try {
				const fetchedCategories = await fetchProductData();
				setCategories(fetchedCategories);
			} catch (error) {
				if (isError(error)) {
					setError(error.message);
				} else {
					setError("An unknown error occurred");
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const filteredArticles = categories.flatMap((category) =>
		category.articles.filter((article) =>
			article.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
	);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const totalArticles = categories.flatMap(
		(category) => category.articles
	).length;

	return (
		<StyledBox>
			{isLoading ? (
				<StyledLoadingTypography variant="body1">
					Loading...
				</StyledLoadingTypography>
			) : error ? (
				<StyledErrorTypography variant="body1">
					Error: {error}
				</StyledErrorTypography>
			) : searchTerm.length ? (
				<StyledSearchTypography variant="h6">
					Search results for "{searchTerm}" ({filteredArticles.length} results)
				</StyledSearchTypography>
			) : (
				<React.Fragment>
					<StyledTotalArticlesTypography variant="h5">
						Total Articles: {totalArticles}
					</StyledTotalArticlesTypography>
					<StyledDivider />
				</React.Fragment>
			)}
			<StyledGrid
				container
				spacing={2}
			>
				{filteredArticles.map((article, index) => (
					<Grid
						key={index}
						xs={2}
					>
						<ArticleCard article={article} />
					</Grid>
				))}
			</StyledGrid>
		</StyledBox>
	);
};

export default ProductList;
