import { getInterestedCandidates } from "../../api/jobApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InterestedCandidates = () => {
    const { id } = useParams();

    const [alumniList, setAlumniList] = useState([]);
    useEffect(() => {
        loadCandidates();
    }, []);

    const loadCandidates = async () => {
        const response = await getInterestedCandidates(id);
        if (response.data.completed) {
            setAlumniList(response.data.data);
        }
        console.log(response.data);
    };

    return (
        <div className="candidate-page">
            {/* Header */}
            <div className="candidate-header">
                <div>
                    <h2 className="candidate-title">
                        Interested Candidates
                    </h2>
                </div>

                <div className="candidate-count">
                    {alumniList.length} Candidates
                </div>
            </div>

            {/* Search */}
            <div className="search-box">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or company..."
                />
                <button className="search-btn">
                    Search
                </button>
            </div>

            {/* Candidate Cards */}
            <div className="row mt-4">
                {alumniList.length > 0 ? (
                    alumniList.map((item) => (
                        <div
                            key={item.id}
                            className="col-lg-4 col-md-6 mb-4"
                        >
                            <div className="candidate-card">
                                <div className="candidate-card-body">
                                    <div className="candidate-info">
                                        {item.profilePhotoPath &&
                                            item.profilePhotoPath !== "/" ? (
                                            <img
                                                src={item.profilePhotoPath}
                                                alt={item.fullName}
                                                className="candidate-avatar"
                                            />
                                        ) : (
                                            <div className="candidate-initial">
                                                {item.fullName
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}
                                            </div>
                                        )}

                                        <div className="candidate-details">
                                            <h4>
                                                {item.fullName}
                                            </h4>

                                            <span className="company-badge">
                                                {item.company ||
                                                    "Company Not Available"}
                                            </span>

                                            {/* <p className="mt-3 mb-1">
                                                <strong>ID:</strong>{" "}
                                                {item.id}
                                            </p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="candidate-footer">
                                    <button className="view-profile-btn">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <div className="empty-state">
                            <img
                                src="/images/no_data_img.jpg"
                                alt="No Candidates"
                            />

                            <h4>No Applications Yet</h4>

                            <p>
                                Interested candidates will appear here
                                once they apply.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InterestedCandidates;