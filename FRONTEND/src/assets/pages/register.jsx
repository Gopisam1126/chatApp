import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "../pageStyles/register.css";
import axios from "axios";
import { useState } from "react";
function Register() {

    const [isShowing, setIsShowing] = useState(false);
    const [rFormData, setRFormData] = useState({
        usermail: "",
        username: "",
        pass: ""
    });
    
    function showPass() {
        setIsShowing(!isShowing);
    }
    
    function handleInputChange(e) {
        setRFormData({...rFormData, [e.target.name]: e.target.value});
    }
    // console.log(rFormData);

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        // console.log(data);
        Object.keys(rFormData).forEach((key) => {
            data.append(key, rFormData[key]);
        });

        try {
            const response = await axios.post("http://localhost:3000/register", rFormData , {
                'Content-Type': 'application/json',
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <section className="register-main-sec">
            <div className="left-container">
                <img src="\images\logo-no-background.png" alt="logo" className="logo" />
                <div className="illus-container">
                    <img src="\images\illus.png" alt="illustration" className="illustration" />
                </div>
            </div>
            <div className="right-container">
                <h5 className="register-head">
                    Register Account
                </h5>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="usermail" id="usermail" className="usermail" placeholder="Email" required onChange={handleInputChange} /><br />
                        <input type="text" name="username" id="username" className="username" placeholder="User Name" required onChange={handleInputChange} /><br />
                        <div className="visibility-icon" onClick={showPass}>
                            {
                                isShowing ? <VisibilityOffIcon style={{color: "#6A9C89"}}/> : <VisibilityIcon style={{color: "#6A9C89"}}/>
                            }
                        </div>
                        <input type={`${isShowing ? 'text' : 'password'}`} name="pass" id="pass" className="pass" placeholder="Password" required onChange={handleInputChange} /><br />
                        <p className="terms-of-use">
                            By Registering You Agree to our
                            <Link to="/t-and-s" className="tns-link">
                                Terms of Use
                            </Link>
                        </p>
                        <input type="submit" value="Register" className="register-btn" />

                        <div className="s-o-container">
                            <hr className="s-o-hr s-o-hr1"/>
                            <span className="sign-up-options">Sign Up Using</span>
                            <hr className="s-o-hr s-o-hr2"/>
                        </div>

                        <div className="signin-with-icons">
                            <Link to="/googleauth" className="s-o-link s-o-l-g">
                                <GoogleIcon style={{
                                    fontSize: "2rem",
                                    marginRight: "1.5vw"
                                }}/>
                            </Link>
                            <Link to="/fbauth" className="s-o-link s-o-l-fb">
                                <FacebookIcon style={{
                                    fontSize: "2rem"
                                }}/>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    </>
}

export default Register;