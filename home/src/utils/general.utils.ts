export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
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
