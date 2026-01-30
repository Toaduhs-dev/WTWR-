const BASE_URL = "http://localhost:3001";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

// Helper to get token
const getToken = () => localStorage.getItem("jwt");

// Wrap request to add token except for public endpoints
export function authedRequest(url, options = {}) {
  const publicEndpoints = ["/signin", "/signup", "/items"];
  const isPublic = publicEndpoints.some((ep) => url.endsWith(ep));
  if (!isPublic) {
    const token = getToken();
    if (token) {
      options.headers = {
        ...(options.headers || {}),
        authorization: `Bearer ${token}`,
      };
    }
  }
  return request(url, options);
}

// Update API calls to use authedRequest
const getItemList = () => {
  return authedRequest(`${BASE_URL}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const addItem = ({ name, weatherType, url, id }) => {
  return authedRequest(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather: weatherType,
      imageUrl: url,
      id,
    }),
  });
};

const removeItem = (id) => {
  return authedRequest(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const api = {
  getItemList,
  addItem,
  removeItem,
};

export default api;
