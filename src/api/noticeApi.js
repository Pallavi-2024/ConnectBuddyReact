import API from "./axiosInstance";

export const getNotices = (institutionId) => {
  return API.get(`Notice/GetNoticeByInstitution?institutionId=${institutionId}`);
};