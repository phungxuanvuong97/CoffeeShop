import { AppData } from "@/types/ApplicationData/AppData";
import { IAction } from "../actions/IAction";
import { ADD_PRODUCT_CART } from "../actions/CartActions";

export function applicationDataReducer(appData: AppData, action: IAction) 
{
    switch(action.type){
        case  ADD_PRODUCT_CART:{
            return {...appData, carts: [...appData.carts, action.payload]}
        }
    }
}

