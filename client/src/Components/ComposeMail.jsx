import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useState } from 'react';
import { info } from '../constants/info';
import useApi from '../hooks/useApi.jsx';
import { API_URLS } from '../hooks/api.urls.js';

const dialogStyle = {
    height: '90%',
    width: '80%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "#f2f6fc",
    '& > p' : {
        fontSize: 14,
        fontWeight: 600
    }
})

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: '14px',
        borderBottom: '2px solid #F5F5F5',
        marginTop: '10px'
    }
})

const Footer = styled(Box) ({
    display: 'flex',
    justifyContent: "space-between",
    padding: '7px 10px',
    alignItems: 'center',
})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: "18px",
    width: '70px'
})

export default function ComposeMail ({openDialog,setOpenDialog}) {

    const [data,setData] = useState({})

    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);

    const config = {
        Host : "smtp.elasticemail.com",
        Username : info.username,
        Password : info.pass,
        Port: "2525",
    }

    const closeComposeMail = (event) => {
        event.preventDefault();

        const payload = {
            to: data.to,
            from: "chandeomkar23@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: "Omkar Chande",
            starred: false,
            type: "drafts"
        }

        saveDraftService.call(payload);

        if(!saveDraftService.error){
            setOpenDialog(false);
            setData({})
        }else{
            
        }

        setOpenDialog(false);
    }

    const sendMail = (event) => {

        event.preventDefault();

        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : "chandeomkar23@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
            message => alert(message)
            );
        }

        const payload = {
            to: data.to,
            from: "chandeomkar23@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: "Omkar Chande",
            starred: false,
            type: "sent"
        }

        sentEmailService.call(payload);

        if(!sentEmailService.error){
            setOpenDialog(false);
            setData({})
        }else{
            
        }

        setOpenDialog(false);
    }

    const onValueChange = (event) => {
        setData({...data,[event.target.name]: event.target.value});
    }

    return(
        <div>
            <Dialog open={openDialog}
            PaperProps={{sx: dialogStyle}}
            >
            <Header>
                <Typography>New Message</Typography>
                <CloseIcon fontSize='small' cursor='pointer' onClick = {(event) => closeComposeMail(event)}/>
            </Header>
            <RecipientsWrapper>
                <InputBase placeholder='Recipients' color='action' name="to" onChange={(event) => onValueChange(event)}/>
                <InputBase placeholder='Subject' color='action' name="subject" onChange={(event) => onValueChange(event)}/>
            </RecipientsWrapper>
            <TextField multiline 
            rows={18}
            sx={{'& .MuiOutlinedInput-notchedOutline' : {border: 'none'}}}
            onChange={(event) => onValueChange(event)}
            name="body"/>

            <Footer>
                <SendButton onClick={(event) => {sendMail(event)}}>Send</SendButton>
                <DeleteOutlinedIcon cursor='pointer' onClick={() => setOpenDialog(false)}/>
            </Footer>
            </Dialog>
        </div>
    )
}