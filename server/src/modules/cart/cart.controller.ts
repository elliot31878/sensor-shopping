import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import sensors, { Sensor } from '../../sensors';

interface ICartItem extends Sensor {
  quantity: number;
}

interface ICart {
  cartItems: ICartItem[];
}

const initCart = (indexes: number[]): ICart => ({
  cartItems: indexes.map((index) => ({
    ...sensors[index],
    quantity: 1,
  })),
});

@Controller('cart')
export class CartController {
  private carts: Record<number, ICart> = {
    1: initCart([0, 2, 5]),
    2: initCart([6, 9, 10]),
  };
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<ICart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }) {
    const cart = this.carts[req.user.userId];
    const cartItem = cart.cartItems.find((item) => item.id === parseInt(id));

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        ...sensors.find((item) => item.id === parseInt(id)),
        quantity: 1,
      });
    }

    return cart;
  }
  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<ICart> {
    this.carts[req.user.userId] = { cartItems: [] };
    return this.carts[req.user.userId];
  }
}
