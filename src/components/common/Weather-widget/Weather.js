import style from './Weather.module.css';

function Weather() {
    return (
        <iframe
            className={style.Widget}
            title="Weather Widget"
            width="140"
            height="350"
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            loading="lazy"
            onError={(e) => console.log("nnoo",e)}
            src="https://sinoptik.bg/widget/100727011/3/140/350/10?url=https://m.netinfo.bg/sinoptik/js/show_widget.js"
        />
    );
}

export default Weather;