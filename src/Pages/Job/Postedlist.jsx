import { Postedjoblist } from "../../api/jobApi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserId } from "../../utils/session";

const Postedlist = () => {
    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        loadPostedJobs();
    }, []);

    const loadPostedJobs = () => {
        const userId = getUserId();
        if (!userId) {
            console.log("User ID not found");
            return;
        }
        Postedjoblist(userId)
            .then((res) => {
                const data =
                    res.data?.data ||
                    res.data?.items ||
                    res.data;

                const jobsArray = Array.isArray(data)
                    ? data
                    : data
                        ? [data]
                        : [];

                // console.log("jobsArray", jobsArray);

                setJobs(jobsArray);
            })
            .catch((err) => {
                console.error("API Error:", err);
            });
    };

    const filteredJobs = Array.isArray(jobs)
        ? jobs.filter((job) => {
            const jobTitle = job.title || job.jobTitle || "";
            const jobCompany = job.company || job.companyName || "";

            return (
                jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                jobCompany.toLowerCase().includes(searchTerm.toLowerCase())
            );
        })
        : [];
    const totalPages = Math.ceil(filteredJobs.length / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedJobs = filteredJobs.slice(
        startIndex,
        startIndex + pageSize
    );
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
                    <button className="btn btn-primary rounded-5 px-4 py-2 ms-2 float-end"
                        onClick={() => navigate('/postjob')}
                        style={{ background: '#1e3c72', border: 'none' }}>
                        Add Job
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
                <div className="row" id="jobListings">
                    {paginatedJobs.length > 0 ? (
                        paginatedJobs.map((job, index) => (
                            <div key={job.id || index} className="col-md-4 mb-4">
                                <div className="job-card">

                                    <div className="card-actions">
                                        <button
                                            className="edit-btn"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevents card-click conflicts
                                                navigate(`/postjob/${job.id}`);
                                            }}
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </button>

                                        <div className="form-check form-switch m-0 p-0 d-flex align-items-center">
                                            <input
                                                className="form-check-input m-0"
                                                type="checkbox"
                                                role="switch"
                                                checked={job.isActive}
                                                onChange={(e) =>
                                                    toggleJob(job.id, e.target.checked)
                                                }
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="job-logo-circle">
                                        <img
                                            src={
                                                //job.profilePhotoPath ||
                                                "/images/office_default_logo.jpg"
                                            }
                                            alt="Company Logo"
                                        />
                                    </div>
                                    <div className="job-content-details">
                                        <h4 className="job-title-new">
                                            {job.title}
                                        </h4>

                                        <p className="job-text-item">
                                            Exp: {job.no_of_Experience} Year
                                        </p>

                                        <p className="job-text-item text-capitalize">
                                            {job.jobLocation}
                                        </p>
                                    </div>
                                    <div className="job-footer d-flex flex-wrap justify-content-between align-items-center gap-3">

                                        <span className="time-badge text-nowrap">
                                            {getTimeText(job.createdDateTime)}
                                        </span>

                                        <button
                                            className="candidate-btn text-nowrap ms-auto"
                                            onClick={() =>
                                                navigate(`/interestedcandidates/${job.id}`)
                                            }
                                        >
                                            View Candidates
                                        </button>

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
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <nav aria-label="Job pagination">
                            <ul className="pagination pagination-md shadow-sm" style={{ cursor: 'pointer' }}>
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link fw-bold" onClick={() => setCurrentPage(currentPage - 1)}>
                                        <i className="bi bi-chevron-left me-1"></i> Previous
                                    </button>
                                </li>
                                {[...Array(totalPages)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${currentPage === index + 1
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() =>
                                                setCurrentPage(index + 1)
                                            }
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}

                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link fw-bold" onClick={() => setCurrentPage(currentPage + 1)}>
                                        Next <i className="bi bi-chevron-right ms-1"></i>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

            </div>
        </div>
    );

};

export default Postedlist;