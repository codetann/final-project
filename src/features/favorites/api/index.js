import axios from "axios";
import { storage } from "../../../utils/storage";

export const fetchFavorites = async () => {
  const { accessToken } = storage.getTokens();
  // if new photo is preset update in cloudinary and return url
  const res = await axios.get("http://localhost:8050/api/favorites", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-type": "application/json",
    },
  });

  return res.data;
};

export const addFavorites = async (business) => {
  const { accessToken } = storage.getTokens();
  // if new photo is preset update in cloudinary and return url
  const res = await axios.post(
    "http://localhost:8050/api/favorites/add",
    business,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/json",
      },
    }
  );

  return res.data;
};

export const removeFavorites = async (business) => {
  const { accessToken } = storage.getTokens();
  // if new photo is preset update in cloudinary and return url
  const res = await axios.post(
    "http://localhost:8050/api/favorites/remove",
    business,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/json",
      },
    }
  );

  return res.data;
};
