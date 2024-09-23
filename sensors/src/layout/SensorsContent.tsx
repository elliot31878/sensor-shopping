import React, { useEffect, useRef, useState } from "react";

import { useGetSensorsById } from "home/useGetSensorsById";

import { Sensor, currency } from "home/utils";
import placeAddToCart from "addToCart/placeAddToCart";
import { useParams } from "react-router";

export default function SensorsContent() {
  const { id } = useParams();

  const [sensor, setSensor] = useState<Sensor>();
  const addToCart = useRef(null);

  const {
    data: sensorData,
    error,
    isError,
    isLoading,
  } = useGetSensorsById(String(id));

  const isAdded = useRef(false);

  useEffect(() => {
    if (sensorData?.data) {
      setSensor(sensorData.data as Sensor);
    }
  }, [sensorData?.data]);

  useEffect(() => {
    if (addToCart.current && !isAdded.current) {
      placeAddToCart(addToCart.current, sensor?.id);
      isAdded.current = true;
    }
  }, [sensor]);

  if (isLoading) return <>Loading ...</>;
  if (isError) return <>{error?.message}</>;

  return (
    <main className="flex flex-row gap-5 my-10">
      <section style={{ width: "30%" }}>
        <img className="w-full" src={sensor?.image} alt={sensor?.name} />
      </section>
      <section style={{ width: "70%" }}>
        <section className="flex">
          <h1 className="font-bold text-3xl flex-grow">{sensor?.name}</h1>
          <p className="font-bold text-2xl flex-end bg-green-700 rounded-lg text-white p-5 h-fit">
            {currency.format(Number(sensor?.price))}
          </p>
        </section>
        <div ref={addToCart}></div>
        <p className="mt-10 font-bold text-2xl">{sensor?.description}</p>
        {sensor?.longDescription
          .trim()
          .split("\n")
          .map((item) => (
            <li className="my-10 font-light text-3xl">{item}</li>
          ))}
      </section>
    </main>
  );
}
