import API from "./axiosInstance";

export const getJobs = (page = 1, pageSize = 10) => {
  return API.get(
    `Job/GetJobs?page=${page}&pageSize=${pageSize}`
  );
};

export const Postedjoblist = (id) => {
    return API.get(
        `Job/Postedjoblist?userId=${id}`
    );
};

export const postJob = async (jobData) => {
    return API.post(
        `Job/JobPost`,
        jobData,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};
export const getJobById = (id, currentUserId) => {
    return API.get(`Job/GetJobById?id=${id}&currentUserId=${currentUserId}`);
};
export const UpdateJob = async (jobData) => {
    return API.post(
        `Job/UpdateJob`,
        jobData,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};
export const getInterestedCandidates = (id) => {
    return API.get(`Job/InterestedCandidates?jobId=${id}`);
};

export const applyJob = async (jobId, currentUserId) => {
    return API.post(
        `Job/ApplyJob?CurrentUserId=${currentUserId}`,
        {
            jobId: jobId
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};