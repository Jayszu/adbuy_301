import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const productsReducer = createReducer(initialState, {
  allProductRequest: state => {
    state.loading = true;
  },
  allProductSuccess: (state, action) => {
    (state.loading = false),
      (state.products = action.payload.products),
      (state.productsCount = action.payload.productsCount);
    state.resultPerPage = action.payload.resultPerPage;
    state.filteredProductsCount = action.payload.filteredProductsCount;
  },
  allProductFail:(state,action) => {
    state.loading = false;
    state.error = action.payload;
  }
});
// wishList add reducer
export const wishListaddReducer = createReducer(initialState, {
  addWishListRequest: state => {
    state.loading = true;
  },
  addWishListSuccess: (state, action) => {
    state.loading = false;
    state.wishlistData = action.payload;
  },
  addWishListFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

// wishlist data reducer
export const wishListDataReducer = createReducer(initialState, {
  getWishListRequest: state => {
    state.loading = true;
  },
  getWishListSuccess: (state, action) => {
    state.loading = false;
    state.wishlistData = action.payload;
  },
  getWishListFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

// wishlist remove reducer
export const wishListRemoveReducer = createReducer(initialState, {
  removeWishListRequest: state => {
    state.loading = true;
  },
  removeWishListSuccess: (state, action) => {
    state.loading = false;
    state.wishlistData = action.payload;
  },
  removeWishListFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});