import {useReducer} from "react";
import {Order} from "../domain/order";
import {AnyProduct} from "../domain/Production";

export type OrderReducerState = Order[];

export type OrderReducerAction =
  | {
      type: "DELETE_ORDER";
      index: number;
    }
  | {
      type: "CREATE_ORDER";
    }
  | {
      type: "ADD_TO_ORDER";
      index: number;
      product: AnyProduct;
    }
  | {
      type: "REMOVE_FROM_ORDER";
      index: number;
      product: AnyProduct;
    }
  | {
      type: "INCREASE_QUANTITY";
      index: number;
      product: AnyProduct;
      amount: number;
    };

function orderReducer(
  state: OrderReducerState = [],
  action: OrderReducerAction
) {
  switch (action.type) {
    case "CREATE_ORDER":
      return [...state, {}];

    case "DELETE_ORDER":
      return state.filter((_, index) => index !== action.index);

    case "ADD_TO_ORDER":
      return state.map((order, index) => {
        if (index === action.index) {
          return { ...order, [action.product]: 1 };
        }
        return order;
      });

    case "REMOVE_FROM_ORDER":
      return state.map((order, index) => {
        if (index === action.index) {
          const { [action.product]: _, ...otherItems } = order;
          return otherItems;
        }
        return order;
      });

    case "INCREASE_QUANTITY":
      return state.map((order, index) => {
        if (index === action.index) {
          return {
            ...order,
            [action.product]: Math.max(0, (order[action.product] || 0) + action.amount)
          };
        }
        return order;
      });

    default:
      return state;
  }
}

export function useOrderReducer(initialState: Order[] = []) {
  return useReducer(orderReducer, initialState);
}
