import axios from "axios";

export const apiCreate = axios.create({
  baseURL: "https://api.football-data.org/v2/",
  headers: { "X-Auth-Token": "b8222ee5b9614c0a903ee097df792fbc" },
});
