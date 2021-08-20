import axios from "axios";
import { storage } from "../../../utils/storage";

export const fetchNearby = async (lat, long) => {
  const { accessToken } = storage.getTokens();
  // if new photo is preset update in cloudinary and return url
  const res = await axios.post(
    "http://localhost:8050/api/nearby",
    {
      location: { lat, long },
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/json",
      },
    }
  );

  return res.data;
};
