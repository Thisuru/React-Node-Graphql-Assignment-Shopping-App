import React, { ReactNode, useEffect, useState } from "react";
import { styled } from "@mui/material";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
// import { Category } from "../types/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCategories } from "../slices/categoriesSlice";

// import { fetchProductData } from "../utils/api";
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
	const [searchTerm, setSearchTerm] = useState("");
	// const [categories, setCategories] = useState<Category[]>([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState<string | null>(null);
	// const [searchTerm, setSearchTerm] = useState("");

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};
	// const [sidebarOpen, setSidebarOpen] = useState(false);

	// const toggleSidebar = () => {
	// 	setSidebarOpen(!sidebarOpen);
	// };

	// const isError = (error: unknown): error is Error => {
	// 	return error instanceof Error;
	// };

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch])
		

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setIsLoading(true);
	// 		setError(null);

	// 		try {
	// 			const fetchedCategories = await fetchProductData();
	// 			setCategories(fetchedCategories);
	// 		} catch (error) {
	// 			if (isError(error)) {
	// 				setError(error.message);
	// 			} else {
	// 				setError("An unknown error occurred");
	// 			}
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	return (
		<React.Fragment>
			<Navbar
				searchTerm={searchTerm}
				handleSearchChange={handleSearchChange}
			/>
			<RootLayoutBox>
				<SidebarContainer>
					<Sidebar
						isLoading={isLoading}
						categories={categories}
						error={error}
					/>
				</SidebarContainer>
				<ContentContainer>
					{children}
					<Footer />
				</ContentContainer>
			</RootLayoutBox>
		</React.Fragment>
	);
};
