import { useState } from 'react';

import style from './Loading.module.css';

const Loading = ({fetchTimeout}) => {

    const [loading, setLoading] = useState(false);
    const requests = {count: 0};

    (function monkeyPatchFetch() {
        if (!('fetch' in window)) return

        const oldFetch = window.fetch
        window.fetch = function fetch() {
            const urlOrRequest = arguments[0]
            const options = arguments[1]

            let method

            if (urlOrRequest && typeof urlOrRequest === 'object') {
                if (options && 'method' in options) {
                    method = options.method
                } else if (urlOrRequest && 'method' in urlOrRequest) {
                    method = urlOrRequest.method
                }
            } else {
                if (options && 'method' in options) {
                    method = options.method
                }
            }

            if (method === undefined) {
                method = 'GET'
            }

            return new Promise((resolve, reject) => {
                handleRequestStart();
                oldFetch(...arguments)
                    .then(response => {
                        handleRequestEnd(response)
                        resolve(response)
                    })
                    .catch(error => {
                        handleRequestEnd(error)
                        reject(error)
                    })
            })
        }
    }());

    const handleRequestEnd = (result) => {
        requests.count--;
        setTimeout(()=> {
            if(requests.count <= 0) {
                requests.count = 0;
                setLoading(false)
            };
        }, fetchTimeout || 500)
        
    }

    const handleRequestStart = (result) => {
        requests.count++;
        setLoading(true);
    }

    return (
        <>
            {loading
                && <div className={style.BarWrapper}>
                    <div className={style.loader}>
                        <div className={style.bar}></div>
                        <div className={style.bar}></div>
                        <div className={style.bar}></div>
                    </div>
                </div>}
        </>
    );
}

export default Loading;