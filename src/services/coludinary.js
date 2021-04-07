import { cloudinaryApiUrl, cloudinaryCloudName } from '../config/environment';
// resources = image, raw, video, auto

const cloudinaryAPI = {
    cloudinaryUpload: (formData) => {
        const form = new FormData();
        form.append("file", formData, formData.name);
        form.append("upload_preset", "ml_default");
        return fetch(`${cloudinaryApiUrl}/${cloudinaryCloudName}/auto/upload`, {
            method: "POST",
            body: form
        }).then(res => res.json())
    }
}

export default cloudinaryAPI;