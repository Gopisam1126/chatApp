/* eslint-disable no-unused-vars */
import UserList from "./userList";
import ChatRoom from "./chatRoom";
import LeftNav from "./leftNav";
import "../componentStyles/createArea.css";
import { useState } from "react";
import NotSelected from "./not_selected";
function CreateArea() {
    const [isSelected, setIsSelected] = useState(false);

    return <>
        <section className="chat-main-sec">
            <section className="left-nav-main-sec">
                <LeftNav/>
            </section>
            <section className="left-main-sec">
                <UserList/>
            </section>
            <section className="right-main-sec">
                {
                    isSelected ? <ChatRoom/> : <NotSelected/>
                }
            </section>
        </section>
    </>
}

export default CreateArea;