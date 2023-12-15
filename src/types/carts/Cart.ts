import {  ProductModel } from "../products/ProductItem"

export type CartModel = {
    id: Number,
    product: ProductModel,
    quanlity: Number
}