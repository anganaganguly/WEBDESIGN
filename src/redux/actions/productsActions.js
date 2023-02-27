import { ActionTypes } from "../constants/action-types";

//for async api call in action creator need to convert

//sync action creator to async action creator

//else it will show error , it will say use custom middleware

export const setProducts = (products) => {

  return {

    type: ActionTypes.SET_PRODUCTS,

    payload: products,

  };

};



export const selectedProduct = (product) => {

  return {

    type: ActionTypes.SELECTED_PRODUCT,

    payload: product,

  };

};

export const removeSelectedProduct = () => {

  return {

    type: ActionTypes.REMOVE_SELECTED_PRODUCT,

  };

};

