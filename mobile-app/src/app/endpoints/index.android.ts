const API_ENDPOINT = "http://10.0.2.2:7071/api";

export * from "./common";

export const ENDPOINTS = {
    GET: `${API_ENDPOINT}/PlayersGet`,
    UPDATE: `${API_ENDPOINT}/PlayersUpdate`,
    CREATE: `${API_ENDPOINT}/PlayersCreate`,
}
