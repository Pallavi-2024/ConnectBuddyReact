import React from "react";

const Jobs = () => {
    return (
        <div class="jobs-page-wrapper">
            <div class="container">
                <div class="jobs-glass-container">
                    <div class="row g-4 justify-content-center">
                        <div class="col-md-5 col-lg-4">
                            <div class="modern-job-card post-card">
                                <div class="card-glass-overlay"></div>
                                <div class="card-content">
                                    <div class="icon-circle">
                                        <i class="bi bi-briefcase-fill"></i>
                                    </div>
                                    <h3>Post a Job</h3>
                                    <p>Share new career opportunities with the alumni network.</p>
                                    <span class="btn-action">Get Started <i class="bi bi-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-4">
                            <div class="modern-job-card find-card">
                                <div class="card-glass-overlay"></div>
                                <div class="card-content">
                                    <div class="icon-circle">
                                        <i class="bi bi-search"></i>
                                    </div>
                                    <h3>Find a Job</h3>
                                    <p>Browse listings and discover your next career move.</p>
                                    <span class="btn-action">Explore <i class="bi bi-arrow-right"></i></span>
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
