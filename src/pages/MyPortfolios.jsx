import BG from "../assets/bg09.webp";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  CardActions,
  Slide,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FaLaptopCode } from "react-icons/fa";
import EllipsisText from "react-ellipsis-text/lib/components/EllipsisText";
import { AllPortfolios } from "../components";
import DividerStyled from "../components/DividerComponent";

const MyPortfolios = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflowY: "auto",
        borderRadius: "0",
      }}
    >
      <Helmet>
        <title>Abolfazl Taghadosi | Portfolios</title>
      </Helmet>
      <CardContent sx={{ p: 0, position: "relative" }}>
        <DividerStyled
          icon={
            <FaLaptopCode
              color="#fff"
              style={{ fontSize: "25px", marginRight: "-10px" }}
            />
          }
        >
          نمونه کارهای من
        </DividerStyled>

        <Grid container sx={{ mx: 3, mt: 5 }}>
          {AllPortfolios.map((portfolio, index) => (
            <Grid key={index} xs={12} sm={6} lg={4} sx={{ px: 2, mb: 2 }}>
              <Slide
                direction="right"
                in={loading}
                style={{
                  transitionDelay: loading ? `${index + 3}50ms` : "0ms",
                }}
              >
                <Card
                  sx={{
                    maxWidth: "100%",
                    backgroundColor: "info.main",
                    boxShadow: "0 0 10px #000",
                    direction: "rtl",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="max-content"
                      width="max-content"
                      image={portfolio.photo}
                      alt={portfolio.title}
                    />
                    <CardContent>
                      <Typography
                        sx={{ fontWeight: "bold" }}
                        variant="h6"
                        textAlign="left"
                        gutterBottom
                      >
                        {portfolio.title}
                      </Typography>
                      <Tooltip title={portfolio.moreDescription} arrow>
                        <Typography
                          variant="body2"
                          textAlign="left"
                          sx={{ direction: "ltr", fontWeight: "bold" }}
                        >
                          <EllipsisText
                            text={portfolio.moreDescription}
                            length={40}
                          />
                        </Typography>
                      </Tooltip>
                    </CardContent>
                  </CardActionArea>
                  <CardActions disableSpacing>
                    <Button href={portfolio.link} size="large" target="_blank">
                      ! کاملشو ببین
                    </Button>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MyPortfolios;
