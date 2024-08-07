export const authLocal = {
  saveToken: (token) => {
    localStorage.setItem("token", token);
  },
  saveid: (id) => {
    localStorage.setItem("id", id);
  },
  getToken: () => {
    return localStorage.token;
  },
  getId: () => {
    return localStorage.id;
  },
};
