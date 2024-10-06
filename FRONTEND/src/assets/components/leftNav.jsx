import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "../componentStyles/leftNav.css"
function LeftNav() {
    return <>
        <section className="left-nav-section">
            <ForumIcon className='lef-nav-icons l-n-i1' style={{
                color: "#E9EFEC",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out"
            }}/>
            <AccountCircleOutlinedIcon className='lef-nav-icons' style={{
                color: "#E9EFEC",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out"
            }}/>
            <ContactsOutlinedIcon className='lef-nav-icons' style={{
                color: "#E9EFEC",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out"
            }}/>
            <WifiCalling3OutlinedIcon className='lef-nav-icons' style={{
                color: "#E9EFEC",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out"
            }}/>
            <SettingsOutlinedIcon className='lef-nav-icons' style={{
                color: "#E9EFEC",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out"
            }}/>
        </section>
    </>
}

export default LeftNav;