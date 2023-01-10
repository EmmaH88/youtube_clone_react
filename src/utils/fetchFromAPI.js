import axios from "axios";

const BASE_URL = `https://youtube-v31.p.rapidapi.com`;

const options = {
  url: BASE_URL,
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "256c6cea88msh796f990889594f1p137525jsnbd2986a617c2",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
