import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard-layout";
import { Suspense } from "react";
import { ProductPage } from "../pages/product-page";

export const routes: RouteObject[] = [
	{
		element: (
			<DashboardLayout>
				<Suspense>
					<Outlet />
				</Suspense>
			</DashboardLayout>
		),
		children: [
			{
				path: "/",
				element: (
					<Navigate
						to="/category-list"
						replace
					/>
				),
			},
			{
				path: "/category-list",
				element: <ProductPage />,
			},
		],
	},
];
