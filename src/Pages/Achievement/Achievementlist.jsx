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
        // axios
        //     .get("Achievement/GetAchievements?createdBy=1")
        //     .then((res) => {
        //         console.log("API Response:", res.data);
        //         setAchievements(res.data.data);
        //     })
        //     .catch((err) => {
        //         console.error("API Error:", err);
        //     });
    }, []);
    return (
        <div className="main-content-outer">
            <div className="container">
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
