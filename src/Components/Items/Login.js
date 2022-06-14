import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { loginUser } from "../../Services/Api.axios";

const Login = () => {
    const userName = useRef("");
    const password = useRef("");

    const [userData, setUserData] = useOutletContext();

    const logOut = () => {
        setUserData(undefined);
    }
    const loginClicked = async (event) => {
        event.preventDefault();
        try
        {
            const accessToken = await loginUser(userName.current.value, 
                password.current.value);  
                
            const userData = {
                accessToken : accessToken,
                userName : userName.current.value
            }

            setUserData(userData);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            { !userData ? 
            <>       
                <form>
                    <label className="labels">Username :</label><input ref={userName} type="text"></input><br></br>
                    <label className="labels">Password :</label><input ref={password} type="password"></input><br></br>
                    <button onClick={loginClicked}>Login</button>
                </form>
            </> :
                <p>You are already Loggin. first <a href="#" onClick={logOut}>Logout</a>.</p>}
        </>
    )
}

export default Login;
