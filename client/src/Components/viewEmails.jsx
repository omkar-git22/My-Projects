import { useOutletContext,useLocation } from "react-router-dom";
import { Box,Typography,styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { noProfilePic } from "../constants/Constant.js";
import { API_URLS } from "../hooks/api.urls";
import useApi from "../hooks/useApi.jsx";

const IconWrapper = styled(Box) ({
    padding: "15px"
})

const Subject = styled(Typography) ({
    fontSize: 22,
    margin: "10px 0 20px 75px",
    display: "flex"
})

const Indicator = styled(Box) ({
    fontSize: "12px",
    background: "#ddd",
    color: "#222",
    padding: "2px 4px",
    marginLeft: "6px",
    borderRadius: "4px",
    alignSelf: "center",
})

const Container = styled(Box) ({
    marginLeft: "15px",
    display: "flex"
})

const Wrapper = styled(Box) ({
    display: "flex",
    '& > p > span': {
        fontSize: "12px",
        color: "#5E5E5E"
    }
})

const Date = styled(Box) ({
    margin: "0 50px 0 auto !important",
    fontSize: "12px",
    color: "#5E5E5E"
})

const ViewEmail = () => {

    const { openDrawer } = useOutletContext();

    const { state } = useLocation();  //state is a prop in Email.jsx file which is accessed through useLocation() property
    const { email } = state;

    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin)

    const deleteEmail = () => {
        moveEmailsToBinService.call([email._id]);
        window.history.back();
    }

    return(
        <Box style={ openDrawer ? { marginLeft: 250 }: { width: "100%" }}>
            <IconWrapper>
            <ArrowBackIcon onClick = {() => window.history.back()} style={{ cursor: "pointer" }} fontSize="small"/>
            <DeleteOutlineIcon fontSize="small" style={{ marginLeft: "40px",cursor: "pointer" }} onClick={() => deleteEmail()}/>
            </IconWrapper>
            <Subject>
                {email.subject} <Indicator component="span">Inbox</Indicator>
            </Subject>
            <Container>
                <img src={ noProfilePic } alt="dp" style={{width: "50px",height: "50px",borderRadius: "50%",margin: "5px 10px 0 10px"}}/>
                <Box style={{width: "calc(100%)"}}>
                    <Wrapper>
                        <Typography style={{marginTop: "10px",marginBottom: "20px"}}>{email.name}
                            <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
                        </Typography>
                        <Date>
                            {(new window.Date(email.date)).getDate()}&nbsp;
                            {(new window.Date(email.date)).toLocaleString('default',{month: "long"})}&nbsp;
                            {(new window.Date(email.date)).getFullYear()}
                        </Date>
                    </Wrapper>
                    <Typography>{email.body}</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default ViewEmail;