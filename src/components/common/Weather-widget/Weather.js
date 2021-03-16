import { useEffect, useState } from 'react';
import style from './Weather.module.css';

function Weather() {
    const [city, setCity] = useState(0);
    useEffect(() =>{
            fetch("https://api.hostip.info/get_html.php")
            .then(x => x.text())
            .then(x => {
                const location = x.split("City: ")[1].split("IP: ")[0].trim();
                console.log(location);
                setCity(location)
            });
    }) 
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
            {city}
        </iframe>
    );
}

export default Weather;