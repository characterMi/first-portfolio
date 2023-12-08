import DevInfo from "./DevInfo";
import Grid from "@mui/material/Unstable_Grid2";

const DeveloperInfo = () => {
  const developerInfo = [
    {
      info: "نام و نام خانوادگی : ابولفضل تقدسی",
    },
    {
      info: "سن : 18",
    },
    {
      info: "استان محل سکونت : خراسان رضوی",
    },
    {
      info: "آدرس ایمیل : abolfazl2007@gmail.com",
    },
    {
      info: "وضعیت خدمت سربازی : معافیت تحصیلی",
    },
  ];

  return (
    <Grid xs={6}>
      {developerInfo.map((value, index) => (
        <DevInfo key={index}>{value.info}</DevInfo>
      ))}
    </Grid>
  );
};

export default DeveloperInfo;
