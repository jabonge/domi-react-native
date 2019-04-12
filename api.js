const axios = require("axios");

export const Api = axios.create({
  baseURL: " http://13.209.45.163:4000"
});
