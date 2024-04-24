import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Slide,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import EllipsisText from "react-ellipsis-text/lib/components/EllipsisText";
import { Helmet } from "react-helmet-async";
import { FaLaptopCode } from "react-icons/fa";
import { AllPortfolios } from "../components";
import DividerStyled from "../components/DividerComponent";

const MyPortfolios = () => {
  const { palette: { warning: { main } } } = useTheme()

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
        backgroundColor: "primary.light",
        overflowY: "auto",
        borderRadius: "0",
      }}
    >
      <Helmet>
        <title>Abolfazl Taghadosi | Projects</title>
      </Helmet>
      <CardContent sx={{ p: 0, position: "relative" }}>
        <DividerStyled
          icon={
            <FaLaptopCode
              color={main}
              style={{ fontSize: "25px", marginRight: "-10px" }}
            />
          }
          textColor={main}
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
