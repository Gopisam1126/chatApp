import UserList from "./userList";
import ChatRoom from "./chatRoom";
import "../componentStyles/createArea.css";
function CreateArea() {
    return <>
        <section className="chat-main-sec">
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