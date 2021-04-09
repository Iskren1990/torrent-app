import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorService from '../../../services/ErrorService';

import style from './ErrorHandler.module.css';
import SubmitBtn from '../SubmitBtn'

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        ErrorService.postError({ error, errorInfo }).catch(console.log);
    }

    redirectToHomeAndRefresh = () => {
        this.props.history.push("/");
        window.location.reload();
    }
    render() {

        if (this.state.hasError) {
            return <main className={style.Error}>
                        <div className={style.Emo}>😥</div>
                        <h1>Something Went Wrong !</h1>
                        <p>Please excuse us and try again later</p>
                        <SubmitBtn
                            value="Return to Home"
                            onClick={e => this.redirectToHomeAndRefresh()} 
                        />
            </main>
        }
        return this.props.children;
    }
}

export default withRouter(ErrorHandler);