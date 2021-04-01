import style from './ScreenshotsSection.module.css';
import CommonImage from '../CommonImage';

const ScreenshotsSection = ({picUrls, styles}) => {
    const imgStyle = styles || style.Image;

    return (
        <div className={style.ScreenshotsSection}>
            {
                picUrls.map(x =>
                    <div className={style.Cont} key={x}>
                        <CommonImage
                            style={imgStyle}
                            src={x}
                            alt="Wrong Format" />
                    </div>
                )
            }
        </div>
    );
}

export default ScreenshotsSection;