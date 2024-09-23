import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TDATA, TERROR } from "../utils/general.utils";

export const KEY_GET_SENSORS_BY_ID_NAMES = {
  SENSORS: "GET_SENSORS_BY_ID",
  PREFIX: (id: string) => `sensors/${id}`,
};
export const useGetSensorsById = (id: string) => {
  const response = useQuery<TDATA, TERROR>({
    queryKey: [KEY_GET_SENSORS_BY_ID_NAMES.SENSORS],
    queryFn: () => {
      return axios.get(
        String(process.env.API_BASE_URL) +
          KEY_GET_SENSORS_BY_ID_NAMES.PREFIX(id)
      );
    },
  });

  return response;
};
