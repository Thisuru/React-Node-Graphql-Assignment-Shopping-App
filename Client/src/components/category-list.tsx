import React from "react";
import { Category } from "../types/types";

interface CategoryListProps {
	categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => (
	<ul>
		{categories.length ? (
			categories[0].childCategories.map(({ name, urlPath }) => (
				<li key={name}>
					<a href={`/${urlPath}`}>{name}</a>
				</li>
			))
		) : (
			<li>Loading...</li>
		)}
	</ul>
);

export default CategoryList;
