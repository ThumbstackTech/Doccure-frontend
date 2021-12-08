import axios from "axios";
import { API_URL } from "../../vars/urls";

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
