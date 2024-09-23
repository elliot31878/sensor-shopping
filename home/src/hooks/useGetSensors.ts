import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TDATA, TERROR } from "../utils/general.utils";

export const KEY_NAMES = {
  SENSORS: "SENSORS",
  PREFIX: "sensors",
};

export const useSensors = () => {
  const response = useQuery<TDATA, TERROR>({
    queryKey: [KEY_NAMES.SENSORS],
    queryFn: () => {
      return axios.get(String(process.env.API_BASE_URL) + KEY_NAMES.PREFIX);
    },
  });

  return response;
};
