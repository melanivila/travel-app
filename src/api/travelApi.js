import axios from "axios";

const travelApi = axios.create({
  baseURL: "https://www.triposo.com/api/20220705",
  params: {
    token: process.env.REACT_APP_API_KEY,
    account: process.env.ACCOUNT,
  },
});

export default searchApi;
