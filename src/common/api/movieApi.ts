import axios from "axios";

// configuration of base url
export default axios.create({
    baseURL: "https://www.omdbapi.com"
});