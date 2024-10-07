import "../componentStyles/chatRoomHeader.css";
// import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
function CRHeader() {

    // const [isActive, setIsActive] = useState(false);

    return <>
        <section className="chat-header-sec">
            <div className="profile-header">
                <div className="profile-det-container">
                    <img src="\images\p1.jpg" alt="p1" className="pro-img-det" />
                    <p className="pro-det-name">John Doe</p>
                    <div className="func-icons">
                        <SearchIcon className="func-icon func-icon1" style={{
                            marginLeft: "1.5vw",
                            color: '#1A3636',
                            cursor: "pointer",
                            fontSize: '2rem'
                        }}/>
                        <LocalPhoneIcon className="func-icon" style={{
                            marginLeft: "1.5vw",
                            color: '#1A3636',
                            cursor: "pointer",
                            fontSize: '2rem'
                        }}/>
                        <VideocamOutlinedIcon className="func-icon" style={{
                            marginLeft: "1.5vw",
                            color: '#1A3636',
                            cursor: "pointer",
                            fontSize: '2rem'
                        }}/>
                        <InfoOutlinedIcon className="func-icon" style={{
                            marginLeft: "1.5vw",
                            color: '#1A3636',
                            cursor: "pointer",
                            fontSize: '2rem'
                        }}/>
                        <MoreVertOutlinedIcon className="func-icon" style={{
                            marginLeft: "1.5vw",
                            color: '#1A3636',
                            cursor: "pointer",
                            fontSize: '2rem'
                        }}/>
                    </div>
                </div>
                {/* <span className="active-status">Active</span> */}
            </div>
        </section>
    </>
}

export default CRHeader;