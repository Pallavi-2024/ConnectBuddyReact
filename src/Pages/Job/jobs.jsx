import React from "react";

const Jobs = () => {
    return (
        <div className="jobs-page-wrapper">
            <div className="container">
                <div className="jobs-glass-container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-5 col-lg-4">
                            <div className="modern-job-card post-card">
                                <div className="card-glass-overlay"></div>
                                <div className="card-content">
                                    <div className="icon-circle">
                                        <i className="bi bi-briefcase-fill"></i>
                                    </div>
                                    <h3>Post a Job</h3>
                                    <p>Share new career opportunities with the alumni network.</p>
                                    <span className="btn-action">Get Started <i className="bi bi-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="modern-job-card find-card">
                                <div className="card-glass-overlay"></div>
                                <div className="card-content">
                                    <div className="icon-circle">
                                        <i className="bi bi-search"></i>
                                    </div>
                                    <h3>Find a Job</h3>
                                    <p>Browse listings and discover your next career move.</p>
                                    <span className="btn-action">Explore <i className="bi bi-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
