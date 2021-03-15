import style from './Weather.module.css';

function Weather() {
    return (
        <iframe
            title="eslint-sux"
            width="140"
            height="350"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            src="https://sinoptik.bg/widget/100727011/3/140/350/10?url=https://m.netinfo.bg/sinoptik/js/show_widget.js"
        >
        </iframe>
    );
}

export default Weather;