// src/components/product-list.tsx
import React from "react";
import { useAppSelector } from "../hooks";
import ArticleCard from "./article-card";
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
  const { categories, isLoading, error, searchTerm } = useAppSelector((state) => state.categories);

  const filteredArticles = categories.flatMap((category) =>
    category.articles.filter((article) =>
      article.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalArticles = categories.flatMap((category) => category.articles).length;

  return (
    <StyledBox>
      {isLoading ? (
        <StyledLoadingTypography variant="body1">Loading...</StyledLoadingTypography>
      ) : error ? (
        <StyledErrorTypography variant="body1">Error: {error}</StyledErrorTypography>
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
      <StyledGrid container spacing={2}>
        {filteredArticles.map((article, index) => (
          <Grid key={index} xs={2}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </StyledGrid>
    </StyledBox>
  );
};

export default ProductList;
