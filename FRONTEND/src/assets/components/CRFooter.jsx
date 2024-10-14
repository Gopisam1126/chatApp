import "../componentStyles/CRFooter.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
function CRFooter() {
    return <>
        <section className="cr-footer-sec">
            <div className="main-cr-footer-c">
                <MoreHorizIcon style={{
                    color: "#E9EFEC",
                    marginRight: "0.9vw",
                    cursor: "pointer"
                }}/>
                <SentimentSatisfiedAltOutlinedIcon style={{
                    color: "#E9EFEC",
                    marginRight: "2.1vw",
                    cursor: "pointer"
                }}/>
                <div className="input-container">
                    <form>
                        <input type="text" className="msg-input" placeholder="Type your message" />
                    </form>
                </div>
                <MicOutlinedIcon style={{
                    color: "#E9EFEC",
                    marginRight: "0.9vw",
                    cursor: "pointer"
                }}/>
                <div className="send-icon-c">
                    <SendOutlinedIcon style={{
                    color: "#E9EFEC",
                    cursor: "pointer"
                }}/>
                </div>
            </div>
        </section>
    </>
}

export default CRFooter;