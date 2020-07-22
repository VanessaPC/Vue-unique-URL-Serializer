const API_BASE = "/api";
const URL = `${API_BASE}/url-uid`;

const UID = {
  BASE: API_BASE,
  ACTIONS: {
    BASE: URL,
    SAVE_URL: `${URL}/save-url`,
    GET_URLS: `${URL}/get-urls`,
  },
};

export default UID;
