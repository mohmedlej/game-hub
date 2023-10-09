import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c64aaef77f154a3d9b1c53fa553e7c4a",
  },
});
