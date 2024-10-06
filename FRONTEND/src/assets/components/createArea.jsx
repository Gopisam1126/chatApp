import UserList from "./userList";
import ChatRoom from "./chatRoom";
import LeftNav from "./leftNav";
import "../componentStyles/createArea.css";
function CreateArea() {
    return <>
        <section className="chat-main-sec">
            <section className="left-nav-main-sec">
                <LeftNav/>
            </section>
            <section className="left-main-sec">
                <UserList/>
            </section>
            <section className="right-main-sec">
                <ChatRoom/>
            </section>
        </section>
    </>
}

export default CreateArea;