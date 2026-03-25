import React, { useEffect, useState } from "react";
import axios from "axios";

const AchievementList = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        axios
            .get("https://localhost:7022/api/Achievement/GetAchievements?createdBy=1")
            .then((res) => {
                console.log("API Response:", res.data);
                setAchievements(res.data.data);
            })
            .catch((err) => {
                console.error("API Error:", err);
            });
    }, []);
    return (
        <div className="main-content-outer">
            <div className="container">
                {/* Header */}
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <div>
                            <h4>Achievement Master</h4>
                            <p className="text-muted">
                                Total: <span>{achievements.length}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="dashboard-card">
                            <div className="table-responsive">
                                <table className="table table-sm mb-0 align-middle custom-table">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Url</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {achievements.length > 0 ? (
                                            achievements.map((achievement) => (
                                                <tr key={achievement.id}>
                                                    <td>{achievement.title}</td>
                                                    <td>
                                                        {new Date(
                                                            achievement.createdDateTime
                                                        ).toLocaleDateString()}
                                                    </td>
                                                    <td>{achievement.description}</td>
                                                    <td>{achievement.url}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center text-muted">
                                                    No Achievements found. Click the + button to add one.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementList;
