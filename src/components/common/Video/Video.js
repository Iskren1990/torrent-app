import style from './Video.module.scss';

const url = "https://www.youtube.com/embed/Qtua5fgZDW4?controls=1";

function Video() {
    return(

        <iframe 
        title="torent-video" 
        width="420" 
        height="315" 
        frameborder="0" 
        allow="accelerometer" 
        allowfullscreen
        gyroscope
        picture-in-picture
        src={url}
        
        >
        </iframe> 
    )
}
export default Video;