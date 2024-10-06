import CRHeader from "./charRoomHeader";
import "../componentStyles/ChatRoom.css";
function ChatRoom() {
    return <>
        <section className="room-main-sec">
            <CRHeader/>
            <h2>Chat Room</h2>
        </section>
    </>
}

export default ChatRoom;