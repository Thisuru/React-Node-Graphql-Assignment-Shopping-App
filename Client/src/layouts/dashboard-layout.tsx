import React, { ReactNode, useEffect } from "react";
import { styled } from "@mui/material";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCategories } from "../slices/categoriesSlice";
import Footer from "../components/footer";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

const RootLayoutBox = styled("div")({
  height: `calc(100vh - ${TOP_NAV_HEIGHT}px)`,
  overflowX: "hidden",
  backgroundColor: "white",
  display: "flex",
  maxWidth: "100%",
});

const SidebarContainer = styled("div")({
  width: SIDE_NAV_WIDTH,
  flexShrink: 0, // Prevent sidebar from shrinking
});

const ContentContainer = styled("div")({
  flexGrow: 1, // Allow content to fill available space
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

interface DashboardLayoutProps {
  children?: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const { categories, isLoading, error } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <RootLayoutBox>
        <SidebarContainer>
          <Sidebar isLoading={isLoading} categories={categories} error={error} />
        </SidebarContainer>
        <ContentContainer>
          {children}
          <Footer />
        </ContentContainer>
      </RootLayoutBox>
    </React.Fragment>
  );
};
