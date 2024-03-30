//Displaying Emails

import { useOutletContext,useParams } from "react-router-dom"
import { API_URLS } from "../hooks/api.urls";
import useApi from "../hooks/useApi.jsx";
import { useEffect } from "react";
import { Checkbox,Box,List,ListItem } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Email from "./Email.jsx";
import { useState } from "react";
import { NoMails } from "./NoMails.jsx";
import { EMPTY_TABS } from "../constants/Constant.js";

export default function Emails () {

    const [selectedEmails,setSelectedEmails] = useState([]);
    const [refreshScreen,setRefreshScreen] = useState(false);
    

    const { openDrawer } = useOutletContext();

    const { type } = useParams();

    const getEmailsService = useApi(API_URLS.getEmailFromType)
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin)
    const deleteEmailsService = useApi(API_URLS.deleteMails)

    useEffect(() => {
        getEmailsService.call({},type);
    },[type,refreshScreen])

    let style = {
        marginLeft: "0",
        width: "100%"
    }

    const selectedAllEmails = (e) => {
        if(e.target.checked){
            const emails = getEmailsService?.response?.map((email) => email._id);
            setSelectedEmails(emails);
        }else{
            setSelectedEmails([]);
        }
    }

    const deleteSelectedMails = (e) => {
        if(type === 'bin'){
            deleteEmailsService.call(selectedAllEmails);
        }else{
            moveEmailsToBinService.call(selectedEmails);
        }
        setRefreshScreen(prevState => !prevState)
    }

    return(
        <Box style={ openDrawer ? { marginLeft: 250 }: { width: "100%" } }>
            <Box style={{ padding: "20px 10px 0 10px",display: "flex", alignItems:"center" }} >
                <Checkbox label="Label" size="small" onChange={(e) => selectedAllEmails(e)}/>
                <DeleteOutlineIcon onClick = {(e) => deleteSelectedMails(e)} style={{ cursor: "pointer" }}/>
            </Box>
            <List>
                {
                    getEmailsService?.response?.map(email => (
                        <Email key={email._id} email={email} selectedEmails = {selectedEmails} setRefreshScreen={setRefreshScreen}
                        setSelectedEmails = {setSelectedEmails}/>
                    ))
                }
            </List>
            {
                getEmailsService?.response?.length === 0 && <NoMails message = {EMPTY_TABS[type]}/>
            }
        </Box>
    )
}