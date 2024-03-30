
import { useState,Suspense } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Emails from '../Components/Emails';
import SuspenseLoader from '../../Common/SuspenseLoader';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Main() {

    let [openDrawer,setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

    return(
        <>
            <Header toggleDrawer = {toggleDrawer}/>
            <Box>
            <Sidebar openDrawer = {openDrawer}/>
            <Suspense fallback={<SuspenseLoader />}>
                <Outlet context={{ openDrawer }}/>
            </Suspense>
            </Box>
        </>
    )
}