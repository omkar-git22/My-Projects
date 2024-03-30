import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import SidebarContent from './SidebarContent';

export default function Sidebar({openDrawer}) {
    return(
        <Drawer anchor='left' 
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{keepMounted: true}} 
        variant="persistent"
        sx={{
            '& .MuiDrawer-paper':{
                marginTop: '64px',
                width: 250,
                background: '#F5F5F5',
                border: 'none',
            }
        }}>
            <SidebarContent />
        </Drawer>
    )
}

