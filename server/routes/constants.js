const API_BASE = "/api";
const URL = `${API_BASE}/url-uid`;

const UID = {
  BASE: API_BASE,
  ACTIONS: {
    BASE: URL,
    GET_ONE_ITEM: `${URL}/get-item/:id`,
    ADD_ITEM: `${URL}/add-item`,
    REMOVE_ITEM: `${URL}/remove-item`,
  },
};

export default UID;
