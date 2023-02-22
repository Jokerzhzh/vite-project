import axios from "axios";
import { LOCALSTORAGE_AUTH_KEY } from "./consts";

const baseHttpURL = import.meta.env.VITE_baseURL;

const instance = axios.create({
  baseURL: baseHttpURL,
});
const instancee = axios.create({
  responseType: "blob",
  baseURL: baseHttpURL,
});

instance.interceptors.request.use((config) => {
  return config;
});

/**
 *  获取baseURL
 *
 * @returns {string}
 */
export function getbaseUrl() {
  return baseHttpURL;
}

/**
 *  getTest 测试
 */
export async function getTest() {
  return instance.get("/getTest");
}
