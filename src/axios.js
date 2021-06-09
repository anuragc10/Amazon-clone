import axios from "axios";
const instance =axios.create({
    baseURL:'...'// the api icloud function url
});

export default instance;