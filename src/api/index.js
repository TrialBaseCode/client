import axios from "axios";

//always doing api call the apllication should application/json (json)
export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  // we have to do bearer token
});
