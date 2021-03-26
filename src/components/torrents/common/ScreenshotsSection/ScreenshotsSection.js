import style from './ScreenshotsSection.module.css';
import CommonImage from '../../../common/CommonImage';

const ScreenshotsSection = ({picUrls}) => {

    return (
        <div className={style.ScreenshotsSection}>
            {
                picUrls.map(x =>
                    <div className={style.Cont} key={x}>
                        <CommonImage
                            style={style.Image}
                            src={x}
                            alt="Wrong Format" />
                    </div>
                )
            }
        </div>
    );
}

export default ScreenshotsSection;