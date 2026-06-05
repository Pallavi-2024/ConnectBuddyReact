import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postJob, getJobById, UpdateJob } from "../../api/jobApi";
import { getUserId } from "../../utils/session";

const PostJob = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [imageBase64, setImageBase64] = useState("");
    const [imagePreview, setImagePreview] = useState(
        "/images/office_default_logo.jpg"
    );

    const [formData, setFormData] = useState({
        title: "",
        companyName: "",
        no_of_Experience: "",
        approximate_CTC: "",
        jobLocation: "",
        description: "",
        url: "",
        email: "",
        phoneNumber: "",
        subTopic: "",
    });

    useEffect(() => {
        if (id) {
            loadJobDetails();
        }
    }, [id]);

    const loadJobDetails = async () => {
        try {
            const response = await getJobById(id);

            if (response.data.completed) {
                const job = response.data.data;

                setFormData({
                    title: job.title || "",
                    companyName: job.companyName || "",
                    no_of_Experience: job.no_of_Experience || "",
                    approximate_CTC: job.approximate_CTC || "",
                    jobLocation: job.jobLocation || "",
                    description: job.description || "",
                    url: job.url || "",
                    email: job.email || "",
                    phoneNumber: job.phoneNumber || "",
                    subTopic: job.subTopic || "",
                });

                if (job.profilePhotoPath) {
                    setImagePreview(job.profilePhotoPath);
                }
            }
        } catch (error) {
            console.error("Error loading job:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const previewImage = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
            setImageBase64(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: id ? parseInt(id) : 0,

            title: formData.title,
            companyName: formData.companyName,

            profilePhotoPath:
                imageBase64 || imagePreview,

            no_of_Experience: formData.no_of_Experience,
            approximate_CTC: formData.approximate_CTC,
            jobLocation: formData.jobLocation,
            description: formData.description,
            url: formData.url,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            subTopic: formData.subTopic,

            createdBy: getUserId(),
            isActive: true,
        };

        try {
            const response = id
                ? await UpdateJob(payload)
                : await postJob(payload);

            if (response.data.completed) {
                alert(
                    id
                        ? "Job Updated Successfully"
                        : "Job Posted Successfully"
                );

                navigate("/postedlist");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error(error);
            alert(
                id
                    ? "Error while updating job"
                    : "Error while posting job"
            );
        }
    };

    return (
        <div className="container py-4">
            <div className="card shadow-sm border-0">

                <div className="card-header bg-white border-bottom position-relative py-3">

                    <button
                        type="button"
                        className="btn-back text-decoration-none position-absolute start-0 ms-3"
                        onClick={() => navigate("/postedlist")}
                    >
                        <i className="bi bi-arrow-left"></i> Back
                    </button>

                    <h2 className="text-center mb-0">
                        {id ? "Edit Job" : "Post Job"}
                    </h2>

                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Title *
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter Title"
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Company Name *
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Enter Company Name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Company Logo
                                </label>

                                <div className="mb-2">
                                    <img
                                        src={imagePreview}
                                        alt="Company Logo"
                                        style={{
                                            height: "80px",
                                            border: "1px solid #ddd",
                                            padding: "5px",
                                        }}
                                    />
                                </div>

                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={previewImage}
                                />
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    Experience
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="no_of_Experience"
                                    value={formData.no_of_Experience}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    Approximate CTC
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="approximate_CTC"
                                    value={formData.approximate_CTC}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    Job Location
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="jobLocation"
                                    value={formData.jobLocation}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Description
                            </label>

                            <textarea
                                rows="5"
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    URL
                                </label>

                                <input
                                    type="url"
                                    className="form-control"
                                    name="url"
                                    value={formData.url}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">
                                    Mobile Number
                                </label>

                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-4 mb-4">

                                <label className="form-label">
                                    SubTopic
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="subTopic"
                                    value={formData.subTopic}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>

                        <div className="d-flex gap-3">

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                {id ? "Update Job" : "Post Job"}
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate("/postedlist")}
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default PostJob;