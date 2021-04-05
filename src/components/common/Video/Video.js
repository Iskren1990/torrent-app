function Video({videoId}) {


    return (
        <>
            {videoId && <iframe
                title="torent-video"
                width="420"
                height="315"
                frameborder="0"
                allow="accelerometer"
                allowfullscreen
                gyroscope
                picture-in-picture
                src={`https://www.youtube.com/embed/${videoId}?controls=1`}
            >
            </iframe>}
        </>
    )
}
export default Video;