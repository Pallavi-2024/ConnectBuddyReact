
export const getUser = () => {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const getUserId = () => {
    const user = getUser();
    return user?.id || null; 
};

export const isLoggedIn = () => {
    return sessionStorage.getItem("isLogin") === "true";
};

export const logout = () => {
    sessionStorage.clear();
};