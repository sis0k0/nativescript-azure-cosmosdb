const API_ENDPOINT = "[ADD_AZURE_FN_URL_HERE]";

export * from "./common";

export const ENDPOINTS = {
    GET: `${API_ENDPOINT}/PlayersGet`,
    UPDATE: `${API_ENDPOINT}/PlayersUpdate`,
    CREATE: `${API_ENDPOINT}/PlayersCreate`,
}
