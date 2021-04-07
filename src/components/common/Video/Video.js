function Video({videoId}) {

    return (
        <>
            {videoId && <iframe
                title="torent-video"
                width="420"
                height="315"
                frameBorder="0"
                allow="accelerometer"
                allowFullScreen={true}
                gyroscope="true"
                picture-in-picture="true"
                src={`https://www.youtube.com/embed/${videoId[1]}?controls=1`}
            >
            </iframe>}
        </>
    )
}
export default Video;