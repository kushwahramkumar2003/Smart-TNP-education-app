// const baseUrl = process.env.VITE_API_END_POINT;
const baseUrl = import.meta.env.VITE_BASE_URL;
const enviroment = import.meta.env.MODE;
const isProduction = enviroment === "production";
const isDevelopment = enviroment === "development";
const isTest = enviroment === "test";
const secretKey = import.meta.env.SECRET_KEY;

console.log("baseUrl :>> ", import.meta.env.VITE_BASE_URL);

const config = {
  baseUrl,
  enviroment,
  isProduction,
  isDevelopment,
  isTest,
  secretKey,
};

export default config;
