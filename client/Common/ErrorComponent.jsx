import { Box,Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";


const ErrorComponent = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <Box>
            <Typography>There was an Error loading this page</Typography>
        </Box>
    )
}

export default ErrorComponent;