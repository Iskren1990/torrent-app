const CLOUD_NAME = "allmighty";
// resources = image, raw, video, auto

const URL = (CLOUD_NAME, resourceType) =>
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`;

const cloudinaryAPI = {

    cloudinaryUpload: (formData) => {
        return fetch(URL(CLOUD_NAME, "auto"), {
            method: "POST",
            body: formData
        })
    }
}

export default cloudinaryAPI;