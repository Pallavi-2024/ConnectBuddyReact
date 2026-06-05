import API from "./axiosInstance";

export const getAchievements = (createdBy) => {
  return API.get(`Achievement/GetAchievements?createdBy=${createdBy}`);
};