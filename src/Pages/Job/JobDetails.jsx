import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById, applyJob } from "../../api/jobApi";
import { getUserId } from "../../utils/session";

const JobDetails = () => {
    const { id } = useParams();

    const [job, setJob] = useState(null);

    useEffect(() => {
        loadJobDetails();
    }, [id]);

    const loadJobDetails = async () => {
        try {
            const currentUserId = getUserId();
            const response = await getJobById(id, currentUserId);
            console.log(response.data.data);
            if (response.data.completed) {
                setJob(response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getDaysAgo = (date) => {
        if (!date) return "";

        const createdDate = new Date(date);
        const today = new Date();

        const diffTime = today - createdDate;
        const diffDays = Math.floor(
            diffTime / (1000 * 60 * 60 * 24)
        );

        return diffDays === 0
            ? "Today"
            : `${diffDays} Days Ago`;
    };
    const [applying, setApplying] = useState(false);
    const submitJobApplication = async (jobId) => {
        try {
            setApplying(true);

            const currentUserId = getUserId();

            const response = await applyJob(jobId, currentUserId);

            if (response.data.status) {
                alert(response.data.message);

                setJob((prev) => ({
                    ...prev,
                    applied: true
                }));
            } else {
                alert(response.data.message || "Unable to apply for job.");
            }
        } catch (error) {
            console.error("Apply Job Error:", error);
            alert("Something went wrong.");
        } finally {
            setApplying(false);
        }
    };

    if (!job) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-light pb-5" style={{ minHeight: "100vh" }}>
            {/* Premium Header Banner */}
            <div
                className="w-100"
                style={{
                    height: "220px",
                    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                    position: "relative"
                }}
            >
            </div>

            <div className="container text-start" style={{ marginTop: "-100px", position: "relative", zIndex: 10 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Main Info Card */}
                        <div className="card shadow-sm border-0 rounded-4 mb-4">
                            <div className="card-body p-4 p-md-5">
                                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                                    <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-4 mb-md-0">
                                        <div className="flex-shrink-0 mb-3 mb-sm-0 me-sm-4" style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "16px",
                                            overflow: "hidden",
                                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                            backgroundColor: "#fff",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <img
                                                src={job.profilePhotoPath || "/images/office_default_logo.jpg"}
                                                alt="Company Logo"
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                onError={(e) => { e.target.src = "/images/office_default_logo.jpg" }}
                                            />
                                        </div>
                                        <div>
                                            <h2 className="fw-bold mb-2 text-dark">{job.title}</h2>
                                            <h5 className="text-secondary fw-medium mb-3 d-flex align-items-center">
                                                <i className="bi bi-buildings text-primary me-2"></i>
                                                {job.companyName}
                                            </h5>
                                            <div className="d-flex flex-wrap gap-2 text-muted" style={{ fontSize: "0.95rem" }}>
                                                <span className="d-flex align-items-center bg-light px-3 py-1 rounded-pill border">
                                                    <i className="bi bi-geo-alt me-2 text-primary"></i>
                                                    {job.jobLocation}
                                                </span>
                                                <span className="d-flex align-items-center bg-light px-3 py-1 rounded-pill border">
                                                    <i className="bi bi-clock-history me-2 text-primary"></i>
                                                    Posted {getDaysAgo(job.createdDateTime)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 text-md-end mt-3 mt-md-0">
                                        {!job.applied ? (
                                            <button
                                                className="btn btn-primary btn-lg rounded-pill fw-bold shadow-sm w-100"
                                                style={{ transition: "all 0.3s ease", background: "#1e3c72" }}
                                                onClick={() => submitJobApplication(job.id)}
                                            >
                                                Apply Now <i className="bi bi-arrow-right-short fs-5 ms-1"></i>
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-success btn-lg rounded-pill fw-bold shadow-sm disabled w-100"
                                            >
                                                <i className="bi bi-check-circle me-2"></i> Applied
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details and Description */}
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="card shadow-sm border-0 rounded-4 h-100">
                                    <div className="card-body p-4 p-md-5">
                                        <h4 className="fw-bold mb-4 text-dark d-flex align-items-center border-bottom pb-3">
                                            <i className="bi bi-file-text text-primary me-3 fs-3"></i>
                                            Job Description
                                        </h4>
                                        <div className="text-secondary lh-lg fs-6" style={{ whiteSpace: "pre-wrap", textAlign: "justify" }}>
                                            {job.description}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card shadow-sm border-0 rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-4 text-dark border-bottom pb-3">Job Overview</h5>
                                        <div className="d-flex flex-column gap-4">
                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-3 rounded-circle me-3 text-primary d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                                    <i className="bi bi-briefcase fs-5"></i>
                                                </div>
                                                <div>
                                                    <small className="text-muted d-block fw-semibold mb-0">Experience</small>
                                                    <span className="text-dark fw-bold">{job.no_of_Experience} Years</span>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-3 rounded-circle me-3 text-primary d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                                    <i className="bi bi-cash-stack fs-5"></i>
                                                </div>
                                                <div>
                                                    <small className="text-muted d-block fw-semibold mb-0">Approx CTC</small>
                                                    <span className="text-dark fw-bold">{job.approximate_CTC}</span>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-3 rounded-circle me-3 text-primary d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                                    <i className="bi bi-tags fs-5"></i>
                                                </div>
                                                <div>
                                                    <small className="text-muted d-block fw-semibold mb-0">Sub Topic</small>
                                                    <span className="text-dark fw-bold">{job.subTopic || 'Not Specified'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow-sm border-0 rounded-4">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-4 text-dark border-bottom pb-3">Contact Info</h5>
                                        <div className="d-flex flex-column gap-3">
                                            {job.email && (
                                                <div className="d-flex align-items-center text-secondary">
                                                    <i className="bi bi-envelope text-primary me-3 fs-5"></i>
                                                    <a href={`mailto:${job.email}`} className="text-decoration-none text-secondary text-truncate" style={{ maxWidth: "200px" }}>
                                                        {job.email}
                                                    </a>
                                                </div>
                                            )}
                                            {job.phoneNumber && (
                                                <div className="d-flex align-items-center text-secondary">
                                                    <i className="bi bi-telephone text-primary me-3 fs-5"></i>
                                                    <a href={`tel:${job.phoneNumber}`} className="text-decoration-none text-secondary">
                                                        {job.phoneNumber}
                                                    </a>
                                                </div>
                                            )}
                                            {job.url && (
                                                <div className="d-flex align-items-center text-secondary">
                                                    <i className="bi bi-globe text-primary me-3 fs-5"></i>
                                                    <a href={job.url} target="_blank" rel="noreferrer" className="text-decoration-none text-primary text-truncate" style={{ maxWidth: "200px" }}>
                                                        {job.url}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;