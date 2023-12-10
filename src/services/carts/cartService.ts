import { CartModel } from "@/types/carts/Cart";
import { AddProductToCart } from "@/reduxs/actions/CartActions";

export async function AddNewProduct(dispatcher: any, product: CartModel) {
    //const response = await instance.post(`cart`).json();
    dispatcher(AddProductToCart(product));
}