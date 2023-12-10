import { ProductModel } from "../products/ProductItem"

export type Order = {
    id: string
    transactionId: String,
    createdDate: String,
    date: String, 
    time: String, 
    items: ProductModel[],
    price: Number,
    rewardPoint: Number,
    totalPrice: Number,
    delivery: String,
    status: String
}