import { BehaviorSubject } from "rxjs";
import { ICart } from "./cart.type";

export const jwt = new BehaviorSubject();

export const cart = new BehaviorSubject();

const API_SERVER = "http://localhost:8080";

export const addToCart = (id) => {
  const getCart = () =>
    fetch(`${API_SERVER}/cart`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt.value}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        cart.next(res);
        return res;
      });

  return fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });
};
