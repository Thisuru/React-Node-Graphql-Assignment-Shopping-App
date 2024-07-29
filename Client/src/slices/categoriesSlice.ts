// src/slices/categoriesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../types/types";
import { fetchProductData } from "../utils/api";

interface CategoriesState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;

}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
  searchTerm: "",
};

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  const response = await fetchProductData();
  return response;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An unknown error occurred";
      });
  },
});

export const { setSearchTerm } = categoriesSlice.actions;
export default categoriesSlice.reducer;
