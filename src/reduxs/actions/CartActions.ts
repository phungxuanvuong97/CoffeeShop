import { CartModel } from "@/types/carts/Cart";
import { IAction } from "./IAction";

export interface CartAction extends IAction{
    type: string;
    payload: CartModel;
}

export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART'
export const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART'
export const UPDATE_PRODUCT_CART = 'UPDATE_PRODUCT_CART'

export function AddProductToCart(cart: CartModel): CartAction{
    return {
        type: ADD_PRODUCT_CART,
        payload: cart
    };
}