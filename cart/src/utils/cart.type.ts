import { Sensor } from "home/utils";

interface ICartItem extends Sensor {
  quantity: number;
}

export interface ICart {
  cartItems: ICartItem[];
}
