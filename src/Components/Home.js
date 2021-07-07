import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";
import '../App.css';
import Amplify, { API, Auth } from 'aws-amplify';
import config from "../appConfig.json";
import awsexports from "../aws-exports";
Amplify.configure(awsexports);

const Home = (props) => {
    const [credential, setCredential] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [id, setId] = useState("Anonymous");
    const [randomResult, setRandomResult] = useState("")

    //Let's get the auth parameters returned by Auth0 from your url
    const getFromAuth0 = () => {
        const urlParams = Object.fromEntries([...new URLSearchParams(props.location.hash)]);
        return {
            idToken: urlParams.id_token,
            expiresIn: urlParams.expires_in,
            domain: config.domain
        }
    };

    const { idToken, domain, username, expiresIn } = getFromAuth0(); // get the user credentials and info from auth0
    
    if (!isLoggedIn) {


        Auth.federatedSignIn(
            domain, // The Auth0 Domain,
            {
                token: idToken, // The id token from Auth0
                // expires_at means the timstamp when the token provided expires,
                // here we can derive it from the expiresIn parameter provided,
                // then convert its unit from second to millisecond, and add the current timestamp
                expires_at: expiresIn * 1000 + new Date().getTime() // the expiration timestamp
            },
            {
                // the user object, you can put whatever property you get from the Auth0
                // for exmaple:
                username
            }
        ).then(credential => {
            // console.log(cred);
        });

        Auth.currentAuthenticatedUser().then((data) => {
            setCredential(data.token);
            setIsLoggedIn(true)
        });

        Auth.currentAuthenticatedUser().then((data) => {
            setId(data.id)
        });
    };

    if (isLoggedIn) {
        API.get("random", "/private", {
            headers: {
                Authorization: `Bearer ${credential}`
            }

        }).then((result) => {
            setRandomResult(result)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className="App">
            {isLoggedIn & <p> Hi, {id}. {randomResult} </p> || <p> Welcome, please <a href="/auth" className="login" >Signup/Login</a> to generate a random number</p>}
        </div>
    );
}

export default Home;


