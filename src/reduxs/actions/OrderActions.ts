import { IAction } from "./IAction";
import { Order } from "@/types/orders/Order";

export interface OrderAction extends IAction{
    type: string;
    payload: Order;
}

export const ADD_ORDER = 'ADD_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
