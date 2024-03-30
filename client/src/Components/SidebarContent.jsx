import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import styled from "@emotion/styled";
import { Sidebar_data } from "../config/SidebarContents.config";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ComposeMail from "./ComposeMail";
import { useState } from 'react';
import { useParams,NavLink } from "react-router-dom";
import {routes} from "../constants/routes.js"

const Buttonstyle = styled(Button)({
    background: "#c2e7ff",
    color: '#001d35',
    padding: 16,
    borderRadius: 16,
    minWidth: "140px",
    textTransform: "none"
}
)

const Container = styled(Box)({
    padding: 8,
    '& > ul' : {
        padding: '10px 0 0 5px',
        fontWeight: 500,
        fontSize: '14px',
        cursor: "pointer",
        '& > a' : {
            textDecoration: "none",
            color: 'inherit'
        }
    },
    '& > ul > a > li > svg' : {
        marginRight: 20
    }
    
})

export default function SidebarContent () {

    const [openDialog, setOpenDialog] = useState(false)

    const { type } = useParams();

    const onComposeClick = () => {
        setOpenDialog(true)
    }

    return(
        <Container>
            <Buttonstyle onClick={() => onComposeClick()}> <CreateOutlinedIcon/> Compose</Buttonstyle>
            <List>
                {
                    Sidebar_data.map(data => (
                        <NavLink key = { data.name } to = {`${routes.emails.path}/${data.name}`}>
                        <ListItem style = {type === data.name.toLowerCase() ? {backgroundColor: "#d3edfd",borderRadius: "0px 16px 16px 0px"} : {}}>
                            <data.icon fontSize="small"/>{data.title}
                        </ListItem>
                        </ NavLink>
                    ))
                }
            </List>
            <ComposeMail openDialog = {openDialog} setOpenDialog={setOpenDialog}/>
        </Container>
    )
}