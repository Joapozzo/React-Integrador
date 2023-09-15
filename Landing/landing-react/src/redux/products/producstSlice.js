import { createSlice } from "@reduxjs/toolkit";
import { TotalProducts, ProductsFilter } from "../../data/ProductsData";

const INITIAL_STATE = {
    products: ProductsFilter,
    totalProducts: TotalProducts
}

export const productsSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state;
        }
    }
})

export const {getProducts} = productsSlice.actions;

export default productsSlice.reducer