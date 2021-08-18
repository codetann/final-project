export const storage = {
  getTokens: () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    return { accessToken, refreshToken };
  },

  setTokens(tokens) {
    localStorage.setItem("accessToken", JSON.stringify(tokens.accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(tokens.refreshToken));
  },

  clearTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
