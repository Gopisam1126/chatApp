import "../pageStyles/login.css";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
function Login() {
    return <>
        <section className="login-main-sec">
            <div className="left-container">
                <img src="\images\logo-no-background.png" alt="logo" className="logo" />
            </div>
            <div className="right-container">
                <div className="form-container">
                    <form>
                        <input type="text" name="username" id="username" className="username" placeholder="User Name" required /><br />
                        <Link to="/resetpass">
                            <span className="frgt-pass">
                                Forgot Password
                            </span>
                        </Link><br />
                        <input type="password" name="pass" id="pass" className="pass" placeholder="Password" required /><br />
                        <input type="submit" value="LOGIN" className="login-btn" />

                        <hr />

                        <span>Sign in With</span>

                        <div className="signin-with-icons">
                            <Link to="/googleauth">
                                <GoogleIcon/>
                            </Link>
                            <Link to="/fbauth">
                                <FacebookIcon/>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    </>
}

export default Login;