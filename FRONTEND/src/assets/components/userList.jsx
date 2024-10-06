import "../componentStyles/userlist.css";
import AddIcon from '@mui/icons-material/Add';
function UserList() {
    return <>
        <section className="userlist-main-sec">
            <div className="chat-a-icon">
                <h5>CHATS</h5>
                <div className="icon-container">
                    <AddIcon style={{
                        color: "#16423C"
                    }}/>
                </div>
            </div>
            <hr className="cai-ulb-sep" />
            <div className="ul-body-container">
                <ul>
                    <li className="user-list-li">
                        <div className="img-name-c">
                            <img src="\images\p1.jpg" alt="p1" className="user-p-img" />
                            <span className="user-chat-name">John Doe</span>
                        </div>
                        <span className="time-stamp-msg">6:45 pm</span>
                    </li>
                    <li className="user-list-li">
                        <div className="img-name-c">
                            <img src="\images\p2.jpg" alt="p1" className="user-p-img" />
                            <span className="user-chat-name">Alex Varghese</span>
                        </div>
                        <span className="time-stamp-msg">6:25 pm</span>
                    </li>
                    <li className="user-list-li">
                        <div className="img-name-c">
                            <img src="\images\p3.jpg" alt="p1" className="user-p-img" />
                            <span className="user-chat-name">Arjun KP</span>
                        </div>
                        <span className="time-stamp-msg">3:05 pm</span>
                    </li>
                    <li className="user-list-li">
                        <div className="img-name-c">
                            <img src="\images\p4.jpg" alt="p1" className="user-p-img" />
                            <span className="user-chat-name">Ananthu P</span>
                        </div>
                        <span className="time-stamp-msg">7:45 am</span>
                    </li>
                    <li className="user-list-li">
                        <div className="img-name-c">
                            <img src="\images\p5.jpg" alt="p1" className="user-p-img" />
                            <span className="user-chat-name">Abhijith</span>
                        </div>
                        <span className="time-stamp-msg">2:01 pm</span>
                    </li>
                    <li className="user-list-li">
                        <div className="img-name-c">
                            <img src="\images\p6.jpg" alt="p1" className="user-p-img" />
                            <span className="user-chat-name">Aswin Vijay</span>
                        </div>
                        <span className="time-stamp-msg">1:31 pm</span>
                    </li>
                    <li className="user-list-li">
                        <div className="img-name-c">
                            <img src="\images\p7.jpg" alt="p1" className="user-p-img" />
                            <span className="user-chat-name">Shabeeh</span>
                        </div>
                        <span className="time-stamp-msg">8:05 am</span>
                    </li>
                    <li className="user-list-li">
                        <div className="img-name-c">
                            <img src="\images\p8.jpg" alt="p1" className="user-p-img" />
                            <span className="user-chat-name">Manavalan</span>
                        </div>
                        <span className="time-stamp-msg">12:45 pm</span>
                    </li>
                </ul>
            </div>
        </section>
    </>
}

export default UserList;