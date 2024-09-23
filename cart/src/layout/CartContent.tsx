import React, { useEffect, useMemo, useState } from "react";

import { cart } from "cart/cartAPIActionsPure";
import { useClearCart, useLoggedIn } from "cart/cartAPIActions";
import { currency } from "home/utils";
import { BehaviorSubject } from "rxjs";
import { ICart } from "../utils/cart.type";
import { useNavigate } from "react-router";

export default function CartContent() {
  const [items, setItems] = useState<ICart["cartItems"]>([]);
  const { clearCart } = useClearCart();
  const isLoggedIn = useLoggedIn();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, []);

  const subTotalItems = useMemo(() => {
    if (items.length > 0) {
      return items
        .map((qty) => qty.quantity)
        .reduce((acc, target) => acc + target);
    }
    return 0;
  }, [items]);

  const sumPrice = useMemo(() => {
    return currency.format(
      items.reduce((acc, target) => acc + target.quantity + target.price, 0)
    );
  }, []);

  useEffect(() => {
    const cartSub = cart as BehaviorSubject<ICart | null>;
    cartSub.subscribe((value) => {
      if (value?.cartItems) setItems(value.cartItems as ICart["cartItems"]);
    });
  }, []);

  return (
    <>
      <main style={{ height: "75%" }} className={`my-10 flex flex-col `}>
        {items.length <= 0 && (
          <span className="font-bold">Your cart is empty</span>
        )}

        {items.map((item) => (
          <section
            className="flex flex-row mb-5 bg-white shadow-2xl rounded-lg p-5"
            key={item.id}
          >
            <img width={300} alt={item.name} src={item.image} />
            <section className="flex flex-col px-10 gap-5">
              <span className="text-wrap text-lg font-bold">{item.name}</span>

              <p className="text-sm font-bold">Quantity : {item.quantity}</p>
            </section>

            <span className="text-right font-bold">
              {currency.format(item.quantity * item.price)}
            </span>
          </section>
        ))}
        {items?.length > 0 && (
          <p className="text-right" id="grand_total">
            <span>Subtotal {subTotalItems} </span>
            {sumPrice}
          </p>
        )}
        {items?.length > 0 && (
          <section className="flex pb-10">
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
        )}
      </main>
    </>
  );
}
