export const saveTokenLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

export const getTokenFromStorage = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token;
  }
  return "";
};
export const removeTokenFromLocal = () => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem("token");
  }
  return "";
};
