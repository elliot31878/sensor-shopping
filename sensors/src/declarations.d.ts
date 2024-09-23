declare module "home/utils" {
  export interface Sensor {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
  }

  export type TDATA = { data: Sensor[] | Sensor | undefined };
  export type TERROR = { message: string } | null | undefined;
  export const currency: Intl.NumberFormat;
}

declare module "home/Header" {
  const Header: React.ComponentType;
  export default Header;
}

declare module "home/Footer" {
  const Footer: React.ComponentType;
  export default Footer;
}

declare module "home/useGetSensorsById" {
  import { TDATA, TERROR } from "home/utils";
  import { UseQueryResult } from "@tanstack/react-query";
  export const useGetSensorsById: (id: string) => UseQueryResult<TDATA, TERROR>;
}

declare module "addToCart/placeAddToCart" {
  export default function placeAddToCart(el: any, id: any): void;
}
