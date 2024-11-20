import { useEffect, useState } from "react";
import "../componentStyles/userlist.css";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            try {
                const usersRes = await axios.get("http://localhost:3000/chats");
                setUsers(usersRes.data);
            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        }
        getUsers();
    }, [])

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
                    {
                        users.length > 0 ? (
                            users.map((user) => (
                                <li className="user-list-li" key={user.id}>
                                    <div className="img-name-c">
                                        <img src={`data:${user.mimeType};base64,${user.file}`} alt={`p${user.id}`} className="user-p-img" />
                                        <span className="user-chat-name">{user.username}</span>
                                    </div>
                                    <span className="time-stamp-msg">6:45 pm</span>
                                </li>
                            ))
                        ) : (
                            <p>No Chats Available</p>
                        )
                    }
                </ul>
            </div>
        </section>
    </>
}

export default UserList;