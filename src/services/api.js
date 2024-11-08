import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: "mah4tTxlzmZZG4LqWfB0qRvjxHEz3Ws6lm228JG8yzs",
    orientation: "squarish",
    per_page: 12,
  },
});

export const getGallery = async (query, page = 1) => {
  const { data } = await instance.get("/search/photos", {
    params: {
      query,
      page,
    },
  });
  const perPage = instance.defaults.params.per_page;
  const totalPages = Math.round(data.total_pages / perPage);
  return { data, totalPages };
};