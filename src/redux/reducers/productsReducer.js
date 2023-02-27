import { ActionTypes } from "../constants/action-types";



//initial state is an object with empty array

const intialState = {

  products: [],

};



export const productsReducer = (state = intialState, { type, payload }) => {

  switch (type) {

    case ActionTypes.SET_PRODUCTS:

      return { ...state, products: payload };

    default:

      return state;

  }

};



export const selectedProductsReducer = (state = {}, { type, payload }) => {

  console.log(type);

  switch (type) {

    case ActionTypes.SELECTED_PRODUCT:

      //existing state

      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:

      return {};

    default:

      return state;

  }

};

