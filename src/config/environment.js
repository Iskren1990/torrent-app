const environment = {
        cloudinaryApiUrl: process.env.REACT_APP_CLOUDINARY_URL,
        cloudinaryCloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        omdbApiUrl: process.env.REACT_APP_OMDB_URL,
        omdbApiKey: process.env.REACT_APP_OMDB_API_KEY,
        newsApiUrl: process.env.REACT_APP_NEWS_URL,
        newsApiKey: process.env.REACT_APP_NEWS_API_KEY,
        serverUrl: process.env.REACT_APP_SERVER_URL,
};

export const {
    cloudinaryApiUrl, 
    cloudinaryCloudName,
    omdbApiUrl,
    omdbApiKey,
    newsApiUrl,
    newsApiKey,
    serverUrl
} = environment;