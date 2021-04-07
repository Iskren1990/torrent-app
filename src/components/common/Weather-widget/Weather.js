import { useEffect, useState } from 'react';
import style from './Weather.module.css';

function Weather() {
    const [city, setCity] = useState(0);
    useEffect(() =>{
            fetch("https://api.hostip.info/get_html.php")
            .then(x => x.text())
            .then(x => {
                const location = x.split("City: ")[1].split("IP: ")[0].trim();
                setCity(location)
            }).catch(console.log);
    }) 
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
        >
            {city}
        </iframe>
    );
}

export default Weather;