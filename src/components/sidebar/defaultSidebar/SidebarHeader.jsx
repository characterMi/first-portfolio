import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { linksData } from "../../../constants";
const SidebarHeader = () => {
  return (
    <Box component="div" className="profile">
      <Box component="div" className="pro-info">
        <Typography
          variant="h4"
          sx={{ textDecoration: "underline", textDecorationColor: "gray" }}
        >
          ابولفضل تقدسی
        </Typography>
        <Button
          href="mailto:abolfazl2007fx@gmail.com"
          size="large"
          variant="h5"
        >
          abolfazl2007fx@gmail.com
        </Button>
      </Box>
      <Divider className="divider" variant="middle" />
      <Box sx={{ display: "flex" }}>
        {linksData.map((link, index) => (
          <IconButton key={index} aria-label={link.name}>
            <a
              style={{ color: `${link.color}` }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarHeader;
