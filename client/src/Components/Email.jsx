import { Box,Typography,Checkbox,styled } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from "react-router-dom";
import {routes} from "../constants/routes.js";
import useApi from "../hooks/useApi.jsx";
import { API_URLS } from "../hooks/api.urls.js";

const Wrapper = styled(Box)({
    padding: "0 0 0 10px",
    background: "#f2f6fc",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    '& > div': {
        display: "flex",
        width: "100%",
        '& > p' : {
            fontSize: "14px"
        }
    }
})

const Indicator = styled(Typography) ({
    fontSize: "12px !important",
    background: "#ddd",
    color: "#222",
    padding: "0 4px",
    borderRadius: "4px",
    marginRight: "6px"
})

const Date = styled(Typography) ({
    marginLeft: "auto",
    marginRight: "20px",
    fontSize: 12,
    color: "#5F6368",
})

const Email = ({ email,selectedEmails,setRefreshScreen,setSelectedEmails }) => {

    const navigate = useNavigate()

    const toggleStarredService = useApi(API_URLS.toggleStarredEmail);

    const toggleStarredMails = () => {
        toggleStarredService.call({ id: email._id,value: !email.starred })
        setRefreshScreen(prevState => !prevState)
    }

    const onValueChange = () => {
        if(selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id != email._id))
        } else{
            setSelectedEmails( prevState => [...prevState,email._id] )
        }
    }

    return(
        <Wrapper>
            <Checkbox size="small" 
            checked={selectedEmails.includes(email._id)}
            onChange={() => onValueChange()}
            />

            {
                email.starred ? 
                <StarIcon fontSize="small" style={{ marginRight:"10px",color: "#FFD800" }} onClick = {() => toggleStarredMails()}/>
                :
                <StarBorderIcon size="small" style={{marginRight: "10px"}} onClick = {() => toggleStarredMails()}/>
            }

            <Box onClick={() => navigate(routes.view.path, {state: {email: email}})}>

                <Typography style={{width: "200px",overflow: "hidden"}}>{ email.name }</Typography>
                <Indicator>Inbox</Indicator>
                <Typography>{email.subject} {email.body && "-"} {email.body}</Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}
                    {(new window.Date(email.date)).toLocaleString('default',{month: "long"})}
                </Date>
            </Box>
        </Wrapper>  
    )
}

// state is a type of prop when we use navigate

export default Email;