import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be9ed16bd5d0443a8130cef4bd55fd4a",
  },
});
