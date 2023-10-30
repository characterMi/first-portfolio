import { Typography } from "@mui/material";
import { BiAlignLeft } from "react-icons/bi";

const DevInfo = ({ children }) => {
    return (
        <div style={{ marginTop: "10px" }}>
            <Typography
                sx={{ fontWeight: "bold", display: "flex", alignItems: "center", pt: 5, textShadow: "0 0 20px #fff", fontSize: {xs: "1.2rem", sm: "1.5rem",lg: "2rem", xl: "3rem"} }}
            >
                <BiAlignLeft style={{ color: "#ebf4f1", padding: "0 5px" }} />
                {children}
            </Typography>
        </div>
    )
}

export default DevInfo;