
const api = {
  
  get: (path) =>
    fetch(`${process.env.REACT_APP_PUBLIC_API_URL}${path}`, {
      method: "GET",
      credentials: "include",
      headers: {},
    }).then(async (res) => ({ data: await res.json(), status: res.status })),

  post: (path, body) =>
    fetch(`${process.env.REACT_APP_PUBLIC_API_URL}${path}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : "",
    }).then(async (res) => {
      return {
        data: await res.json(),
        status: res.status,
      };
    }),

  patch: (path, body) =>
    fetch(`${process.env.REACT_APP_PUBLIC_API_URL}${path}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : "",
    }).then(async (res) => ({ data: await res.json(), status: res.status })),

  delete: (path, body) =>
    fetch(`${process.env.REACT_APP_PUBLIC_API_URL}${path}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : "",
    }).then(async (res) => ({ data: await res.json(), status: res.status })),
};

export default api;
// Vercel