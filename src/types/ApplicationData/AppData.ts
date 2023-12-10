import { Cart } from "../carts/Cart"
import { Order } from "../orders/Order"
import { TrackingOrder } from "../orders/TrackingOrder"
import { UserInfo } from "../users/UserInfo"

export type AppData = {
    userInfo: UserInfo,
    carts: Cart[],
    orders: Order[],
    trackingOrders: TrackingOrder[]
}