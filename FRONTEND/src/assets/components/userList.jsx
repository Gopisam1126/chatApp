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
                
            </div>
        </section>
    </>
}

export default UserList;