import axios from "axios";

const instance = axios.create({
  baseURL: "https://parultinderbackend.herokuapp.com/",
});

export default instance;
