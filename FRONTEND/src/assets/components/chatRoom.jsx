import CRHeader from "./charRoomHeader";
import CRFooter from "./CRFooter";
import "../componentStyles/ChatRoom.css";
function ChatRoom() {

    return <>
        <section className="room-main-sec">
            <CRHeader/>
            <div className="chat-container">

            </div>
            <CRFooter/>
        </section>
    </>
}

export default ChatRoom;