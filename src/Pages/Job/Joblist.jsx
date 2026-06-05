import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getJobs } from "../../api/jobApi";


const Joblist = () => {
    const navigate = useNavigate();

    const [job, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        loadJobs();
    }, [currentPage]);

    const loadJobs = () => {
        getJobs(currentPage, pageSize)
            .then((res) => {
                const jobsArray =
                    res.data?.data ||
                    res.data?.items ||
                    res.data ||
                    [];
                setJobs(jobsArray);
                setHasMore(jobsArray.length === pageSize);
            })
            .catch((err) => {
                console.error("API Error:", err);
            });
    };

    const filteredJobs = job.filter(job => {
        const jobTitle = job.title || job.jobTitle || "";
        const jobCompany = job.company || job.companyName || "";
        const matchesSearch = jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            jobCompany.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch
    });
    const getTimeText = (date) => {
        if (!date) return "Recent";

        const createdDate = new Date(date);
        const now = new Date();

        const diffTime = now - createdDate;

        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffMonths = Math.floor(diffDays / 30);
        const diffYears = Math.floor(diffDays / 365);

        if (diffMinutes < 1) return "Just now";
        if (diffMinutes < 60)
            return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;

        if (diffHours < 24)
            return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;

        if (diffDays === 1) return "Yesterday";

        if (diffDays < 7)
            return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

        if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
        }

        if (diffDays < 365)
            return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;

        return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
    };

    const formatExperience = (exp) => {
        if (!exp) return "Experience Not Specified";
        const cleanExp = String(exp).replace(/years?/i, "").trim();
        return `${cleanExp} Years`;
    };

    return (
        <div className="joblist-wrapper">
            <div className="container py-4">
                <div className="joblist-header mb-4">
                    <button className="btn-back" onClick={() => navigate('/jobs')}>
                        <i className="bi bi-arrow-left"></i> Back to Jobs
                    </button>
                </div>
                <div className="job-filter-bar mb-4">
                    <div className="row g-3 align-items-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="search-input-group ps-4 pe-2 py-2 bg-white rounded-5 border d-flex align-items-center shadow-sm">
                                <i className="bi bi-search text-secondary me-2"></i>
                                <input
                                    type="text"
                                    className="form-control border-0 shadow-none flex-grow-1"
                                    style={{ outline: 'none', background: 'transparent' }}
                                    placeholder="Search by job title or company..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                //onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
                                />
                                <button className="btn btn-primary rounded-5 px-4 py-2 ms-2" style={{ background: '#1e3c72', border: 'none' }}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 pb-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <div key={job.jobId || index} className="col-md-4">
                                <div className="job-list-card" onClick={() => { console.log("Job Id:", job.id); navigate(`/jobdetails/${job.jobId}`) }}
                                    style={{ cursor: "pointer" }} >
                                    <div className="job-card-header">
                                        <div className="job-logo" style={{ backgroundColor: `${job.color || '#45b7d1'}15`, color: job.color || '#45b7d1' }}>
                                            {job.profilePhotoPath ? (
                                                <img
                                                    src={job.profilePhotoPath}
                                                    alt={job.company || "Company Logo"}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                                                />
                                            ) : (
                                                <i className="bi bi-briefcase"></i>
                                            )}
                                        </div>
                                        <span className="job-time"><i className="bi bi-clock"></i> {getTimeText(job.createdDateTime)}</span>
                                    </div>

                                    <div className="job-card-body">
                                        <h3 className="job-title">{job.title || job.jobTitle || "Untitled"}</h3>
                                        <p className="job-company">{job.company || job.companyName || "Unknown Company"}</p>

                                        <div className="job-details">
                                            <span className="job-detail-item">
                                                <i className="bi bi-geo-alt"></i> {job.location || job.jobLocation || "N/A"}
                                            </span>
                                            <span className="job-detail-item">
                                                <i className="bi bi-person-workspace"></i> {formatExperience(job.experience)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <div className="empty-state">
                                <i className="bi bi-search display-1 text-muted mb-3"></i>
                                <h3>No jobs found</h3>
                            </div>
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                <div className="d-flex justify-content-center mt-4 mb-5">
                    <nav aria-label="Job pagination">
                        <ul className="pagination pagination-md shadow-sm" style={{ cursor: 'pointer' }}>
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link fw-bold" onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}>
                                    <i className="bi bi-chevron-left me-1"></i> Previous
                                </button>
                            </li>
                            <li className="page-item active">
                                <span className="page-link fw-bold px-4">{currentPage}</span>
                            </li>
                            <li className={`page-item ${!hasMore || job.length < pageSize ? 'disabled' : ''}`}>
                                <button className="page-link fw-bold" onClick={() => setCurrentPage(prev => prev + 1)}>
                                    Next <i className="bi bi-chevron-right ms-1"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Joblist;
