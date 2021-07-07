import '../App.css';
import { AmplifyAuth0Button, AmplifySignUp } from '@aws-amplify/ui-react';
import config from "../appConfig.json";



const Login = () => {
    return (
        <>
            <div style={{ width: "50%" }}>
                <AmplifySignUp></AmplifySignUp>
                <AmplifyAuth0Button config={config} />
            </div>

        </>

    );
}

export default Login;