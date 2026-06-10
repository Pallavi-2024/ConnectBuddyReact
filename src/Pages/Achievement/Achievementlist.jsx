import React, { useEffect, useState } from "react";
import { getAchievements } from "../../api/achievementApi";
import { getUserId } from "../../utils/session";

const AchievementList = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        const userId = getUserId();
        if (!userId) {
            console.log("User ID not found");
            return;
        }

        getAchievements(userId)
            .then((res) => {
                setAchievements(res.data.data);
            })
            .catch((err) => {
                console.log("API Error:", err);
            });
    }, []);

    return (
        <div className="main-content-outer mt-4">
            <div className="container">
                {/* Header */}
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="list-page-title">Achievement Master</h4>
                            <p className="list-count-text">
                                Total Records:{" "}
                                <span className="list-count-badge">
                                    {achievements.length}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table Card */}
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="list-card">
                            <div className="table-responsive">
                                <table className="table list-table align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th className="th-sr">No</th>
                                            <th className="th-title">Title</th>
                                            <th className="th-date">Date</th>
                                            <th className="th-desc">Description</th>
                                            <th className="th-url">Website</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {achievements.length > 0 ? (
                                            achievements.map((achievement, index) => (
                                                <tr key={achievement.id}>
                                                    <td data-label="No">
                                                        <span className="row-number">
                                                            {index + 1}
                                                        </span>
                                                    </td>
                                                    <td data-label="Title">
                                                        <div className="fw-semibold text-dark">
                                                            {achievement.title}
                                                        </div>
                                                    </td>
                                                    <td data-label="Date">
                                                        <span className="date-badge">
                                                            {new Date(
                                                                achievement.createdDateTime
                                                            ).toLocaleDateString("en-IN", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric",
                                                            })}
                                                        </span>
                                                    </td>
                                                    <td
                                                        data-label="Description"
                                                        className="description-cell"
                                                    >
                                                        {achievement.description}
                                                    </td>
                                                    <td data-label="Website">
                                                        {achievement.url ? (
                                                            <a
                                                                href={achievement.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="list-link"
                                                            >
                                                                <i className="bi bi-box-arrow-up-right me-1"></i>
                                                                Visit
                                                            </a>
                                                        ) : (
                                                            <span className="text-muted">—</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="text-center py-5"
                                                >
                                                    <div className="empty-state">
                                                        <i className="bi bi-trophy fs-1 text-muted mb-2 d-block"></i>
                                                        <p className="text-muted mb-0">
                                                            No achievements found yet.
                                                        </p>
                                                    </div>
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

