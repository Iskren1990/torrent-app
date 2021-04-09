import {serverUrl} from '../config/environment';
import fetchAPI from '../utils/fetchAPI';

const ErrorService = {
    postError: (errorData) => fetchAPI.post(`${serverUrl}/api/error` , errorData),
}

export default ErrorService;