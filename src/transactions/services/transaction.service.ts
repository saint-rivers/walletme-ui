import api from "../../axios/api";

export const getRecentTransactions = async (page: Number, size: Number) => {
  try {
    const results = await api.get(`/transactions?page=${page}&size=${size}`);
    // console.log(results);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};
