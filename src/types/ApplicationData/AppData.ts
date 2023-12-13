import { CartModel } from "../carts/Cart"
import { Order } from "../orders/Order"
import { TrackingOrder } from "../orders/TrackingOrder"
import { UserInfo } from "../users/UserInfo"

export type AppData = {
    userInfo: UserInfo,
    carts: CartModel[],
    orders: Order[],
    trackingOrders: TrackingOrder[]
}