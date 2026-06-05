import React from "react";
import { getUser } from "../../utils/session";
const Dashboard = () => {
    const user = getUser();

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-3" style={{ float: "inline-start" }}>Welcome, {user.firstName} {user.lastName}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="dashboard-card">
                        <div className="dashboard-card-header">
                            <div className="dashboard-card-title">
                                <svg className="dashboard-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Personal Information
                            </div>
                            <a href="#" className="dashboard-see-all">See all</a>
                        </div>

                        <div className="dashboard-profile-section">
                            <img src="./images/user-profile-pic.png" alt="Profile" className="dashboard-avatar" />
                            <p className="dashboard-profile-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida elit et velit sollicitudin iaculis.
                                Fusce tincidunt urna quis tortor dapibus, ut fringilla libero pellentesque.
                            </p>
                        </div>

                        <div className="dashboard-stats-grid">
                            <div className="dashboard-stat-card blue">
                                <div>
                                    <div className="dashboard-stat-number">25</div>
                                    <div className="dashboard-stat-label">Proud Alumni from Shreyas High School</div>
                                </div>
                                <img src="./images/alumni-img-1.png" alt="Alumni" className="dashboard-stat-image" />
                            </div>

                            <div className="dashboard-stat-card green">
                                <div>
                                    <div className="dashboard-stat-number">30</div>
                                    <div className="dashboard-stat-label">Proud Alumni from Proud University</div>
                                </div>
                                <img src="./images/alumni-img-2.png" alt="Graduate"
                                    className="dashboard-stat-image graduate-state" />
                            </div>
                        </div>


                    </div>
                    <button className="dashboard-update-btn">
                        UPDATE PERSONAL INFORMATION
                    </button>
                </div>

                <div className="col-lg-6">
                    <div className="dashboard-card">
                        <div className="dashboard-card-header">
                            <div className="dashboard-card-title">
                                <span><img src="./images/achivement-img.png" alt="" /></span>
                                Latest News
                            </div>
                            <a href="#" className="dashboard-see-all">See all</a>
                        </div>

                        <div className="dashboard-news-item">
                            <div className="dashboard-news-date">08/06/25</div>
                            <p className="dashboard-news-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor iaculis tempus.
                            </p>
                        </div>

                        <div className="dashboard-news-item">
                            <div className="dashboard-news-date">08/06/25</div>
                            <p className="dashboard-news-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor iaculis tempus.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="dashboard-card-header">
                            <div className="dashboard-card-title">
                                <span><img src="./images/achivement-img.png" alt="" /></span>
                                Achievements
                            </div>
                            <a href="#" className="dashboard-see-all">See all</a>
                        </div>

                        <div className="dashboard-achievements-grid">
                            <div className="dashboard-achievement-card">
                                <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop"
                                    alt="Achievement 1" className="dashboard-achievement-image" />
                                <div className="dashboard-achievement-overlay">
                                    <p className="dashboard-achievement-text">Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>

                            <div className="dashboard-achievement-card">
                                <img src="https://images.unsplash.com/photo-1464047736614-af63643285bf?w=300&h=300&fit=crop"
                                    alt="Achievement 2" className="dashboard-achievement-image" />
                                <div className="dashboard-achievement-overlay">
                                    <p className="dashboard-achievement-text">Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>

                            <div className="dashboard-achievement-card">
                                <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop"
                                    alt="Achievement 3" className="dashboard-achievement-image" />
                                <div className="dashboard-achievement-overlay">
                                    <p className="dashboard-achievement-text">Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;