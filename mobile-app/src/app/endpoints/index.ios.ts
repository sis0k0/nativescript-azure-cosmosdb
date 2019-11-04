const API_ENDPOINT = "http://localhost/api";

export * from "./common";

export const ENDPOINTS = {
    GET: `${API_ENDPOINT}/PlayersGet`,
    UPDATE: `${API_ENDPOINT}/PlayersUpdate`,
    CREATE: `${API_ENDPOINT}/PlayersCreate`,
}
