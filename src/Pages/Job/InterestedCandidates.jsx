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
        <div className="alumni-list" id="alumniList">
            {alumniList && alumniList.length > 0 ? (
                alumniList.map((item, index) => (
                    <div
                        key={index}
                        className="alumni-card"
                        data-name={item.firstName}
                        data-year={item.passoutYear}
                    >
                        <img
                            src={
                                item.profilePhotoPath
                                    ? item.profilePhotoPath
                                    : "/images/user-img-big.png"
                            }
                            alt={`${item.firstName} Image`}
                            className="alumni-avatar"
                        />

                        <div className="alumni-info">
                            <div className="alumni-name">
                                {item.firstName}
                            </div>

                            <div className="alumni-company">
                                {item.companyName}
                            </div>

                            <div className="alumni-location">
                                {item.jobTitle}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-md-12 text-center">
                    <img
                        src="/images/no_data_img.jpg"
                        alt="No Alumni Found"
                        style={{
                            maxWidth: "300px",
                            opacity: 0.7,
                        }}
                    />

                    <h4 className="mt-3 text-muted">
                        No one has applied yet!
                    </h4>
                </div>
            )}
        </div>
    );
};

export default InterestedCandidates;