import { Box, Typography } from "@mui/material";

function NotFound() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="/images/404/404.jpg" alt="404 error" width="30%" />

            <Typography sx={{ mb: "1rem", fontWeight: "700" }}>Such page doesn't exist</Typography>
        </Box>
    )
}

export default NotFound;