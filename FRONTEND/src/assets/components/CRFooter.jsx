import "../componentStyles/CRFooter.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
function CRFooter() {
    return <>
        <section className="cr-footer-sec">
            <div className="main-cr-footer-c">
                <MoreHorizIcon/>
                <SentimentSatisfiedAltOutlinedIcon/>
                <div className="input-container">
                    <form>
                        <input type="text" className="msg-input" />
                    </form>
                </div>
                <MicOutlinedIcon/>
                <div className="send-icon-c">
                    <SendOutlinedIcon/>
                </div>
            </div>
        </section>
    </>
}

export default CRFooter;