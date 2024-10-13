import CRHeader from "./charRoomHeader";
import CRFooter from "./CRFooter";
import "../componentStyles/ChatRoom.css";
function ChatRoom() {
    return <>
        <section className="room-main-sec">
            <CRHeader/>
            <h2>Chat Room</h2>
            <CRFooter/>
        </section>
    </>
}

export default ChatRoom;