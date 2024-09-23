import React, { useEffect, useState } from "react";
import { useSensors } from "../hooks/useGetSensors";
import { currency, Sensor } from "../utils/general.utils";
import { useLoggedIn, useAddCart } from "cart/cartAPIActions";
import { Link } from "react-router-dom";

export const HomeContent = React.memo(() => {
  const [sensors, setSensors] = useState<Sensor[]>([]);
  const loggedIn = useLoggedIn();
  const { data: sensorData, error, isLoading, isError } = useSensors();

  const { addToCart } = useAddCart();

  useEffect(() => {
    if (sensorData?.data) setSensors(sensorData.data as Sensor[]);
  }, [sensorData]);

  if (isLoading) return <>Loading ... </>;
  if (isError) return <>{error?.message}</>;

  return (
    <main className="columns-1 md:columns-2 lg:columns-3 gap-10 bg-zinc-400 p-10 rounded-md m-5">
      {sensors.map((sensor) => (
        <Link
          className="
          flex 
          z-10
          flex-col 
          justify-center
          items-center
          rounded-md
        bg-white 
          overflow-hidden
          p-5 relative
          transition-all
          shadow-md 
          hover:shadow-2xl
          hover:scale-125
          hover:z-50
          h-fit
          mb-5
          "
          key={sensor.id}
          to={`/sensor/${sensor.id}`}
        >
          <span
            className="
                absolute
                text-sm
              text-white
              bg-green-700 
                font-extrabold 
                top-3
                left-3 
                rounded-lg
                p-2
         "
          >
            {currency.format(sensor.price)}
          </span>
          <img
            className="object-cover h-auto "
            src={sensor.image}
            alt={sensor.name}
          />
          <section className="w-full">
            <article className="font-bold truncate">
              <a className="text-nowrap">{sensor.name}</a>
            </article>
          </section>
          <p className="text-sm mt-4">{sensor.description}</p>
          {loggedIn && (
            <section className="text-right mt-2 w-full">
              <button
                className="
                bg-blue-500
                hover:bg-blue-700 
                rounded-md px-3 py-5 
                w-full
                text-sm
              text-white"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart({ id: sensor.id });
                }}
                id={`addtocart_${sensor.id}`}
              >
                Add to cart
              </button>
            </section>
          )}
        </Link>
      ))}
    </main>
  );
});
export default HomeContent;
