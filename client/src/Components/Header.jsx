import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { gmailLogo } from '../constants/Constant';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const StyledAppBar = styled(AppBar)({
    background: '#F5F5F5',
    boxShadow: 'none'
})

const SearchBar = styled(Box)({
    background: '#EAF1FB',
    marginLeft: 100,
    borderRadius: 8,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div' : {
        width: '100%',
        padding: '0 10px'
    }
})

const Options = styled(Box) ({
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& > svg' : {
        marginLeft: 20
    }
})

const MenuStyle = {
    cursor: "pointer"
}

export default function Header({toggleDrawer}) {
    return(
        <div>
            <StyledAppBar position='static'>
                <Toolbar>
                    <MenuIcon color='action' style={MenuStyle} onClick = {toggleDrawer}/>
                    <img src={gmailLogo} alt="logo" style={{width:90, height:50, marginLeft: 10}} />
                    <SearchBar>
                        <SearchIcon color='action'/>
                        <InputBase placeholder='Search Mail'/>
                        <TuneIcon color='action'/>
                    </SearchBar>

                    <Options>
                        <HelpOutlineOutlinedIcon color='action'/>
                        <SettingsOutlinedIcon color='action' />
                        <AppsOutlinedIcon color='action'/>
                        <AccountCircleOutlinedIcon color='action' />
                    </Options>
                </Toolbar>
            </StyledAppBar>
        </div>
    )
}