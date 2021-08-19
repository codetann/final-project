import axios from "axios";
import { storage } from "../../../utils/storage";

const _uploadToCloudinary = async (image) => {
  // create empty formData
  const formData = new FormData();
  // endpoint for cloudinary api
  const cloudinaryURL = `https://api.Cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;
  // add data to formdata
  formData.append("file", image);
  formData.append("upload_preset", "u1fcbzde");
  // send image data to cloudinary via axios api
  const photo = await axios.post(cloudinaryURL, formData);
  // return user new photo url
  return await photo.data.secure_url;
};

export const updateUserDetails = async (data) => {
  const { accessToken } = storage.getTokens();
  // if new photo is preset update in cloudinary and return url
  if (data?.photo) data.photo = await _uploadToCloudinary(data.photo);
  // send post request with access token to update user and return details
  const res = await axios.post(
    "http://localhost:8050/api/update/user",
    {
      data,
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
