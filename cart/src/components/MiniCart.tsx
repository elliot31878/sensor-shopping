import "tailwindcss/tailwind.css";

import React, { useEffect, useState } from "react";
import { useClearCart } from "cart/cartAPIActions";
import { currency } from "home/utils";
import { cart } from "cart/cartAPIActionsPure";
import { ICart } from "../utils/cart.type";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const MiniCart = React.memo(() => {
  const [items, setItems] = useState<ICart["cartItems"] | undefined>(undefined);
  const [showCart, setShowCart] = useState(false);
  const { clearCart } = useClearCart();

  useEffect(() => {
    setItems(cart.value?.cartItems);
    //@ts-ignore
    cart.subscribe((cart) => {
      console.log(cart);
      setItems(cart?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <span
        onBlur={() => {
          setShowCart(false);
        }}
        onClick={() => {
          setShowCart(!showCart);
        }}
        id="showcart"
      >
        <i
          className="ri-shopping-cart-2-fill text-2xl cursor-pointer"
          id="showLogin"
        >
          {items?.length}
        </i>
        <Dialog fullWidth open={showCart}>
          <DialogTitle>Your Cart Preview</DialogTitle>
          {items.length <= 0 && (
            <DialogContent>
              <DialogContentText>Your Cart Is Empty</DialogContentText>
            </DialogContent>
          )}
          {items.length > 0 && (
            <section className="w-full flex flex-col gap-5 items-center justify-center p-5">
              <article
                className="grid gap-3 text-sm"
                style={{ gridTemplateColumns: "1fr 3fr 10fr 2fr" }}
              >
                {items.map((item) => (
                  <React.Fragment key={item.id}>
                    <p>{item.quantity}</p>
                    <img
                      alt={item.name}
                      src={item.image}
                      className="rounded-md"
                    />
                    <span>{item.name}</span>
                    <span className="text-right">
                      {currency.format(item.quantity * item.price)}
                    </span>
                  </React.Fragment>
                ))}
              </article>
              <span className="absolute right-6 bottom-16">
                {currency.format(
                  items.reduce(
                    (acc, target) => acc + target.quantity + target.price,
                    0
                  )
                )}
              </span>
              <section className="flex gap-5">
                <section className="flex-grow">
                  <button
                    className="bg-white border-2 border-green-800 font-light text-sm rounded-md py-2  px-5"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    Clear Cart
                  </button>
                </section>
                <section className="flex-end">
                  <button
                    className="bg-green-800 text-white py-2 px-5 font-light text-sm  rounded-md"
                    onClick={() => clearCart()}
                  >
                    Checkout
                  </button>
                </section>
              </section>
            </section>
          )}
        </Dialog>
      </span>
    </>
  );
});

export default MiniCart;
