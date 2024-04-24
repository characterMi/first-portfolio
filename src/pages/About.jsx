import { Box, Typography, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { HiOutlineUser } from "react-icons/hi";
import { RiHeart2Fill } from "react-icons/ri";
import { ParticlesComponent } from "../components";
import DividerStyled from "../components/DividerComponent";
import { stars } from "../particles/particles";

const About = () => {
  const { palette: { warning: { main } } } = useTheme()

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "primary.light",
        overflowY: "auto",
      }}
    >
      <Helmet>
        <title>Abolfazl Taghadosi | About</title>
      </Helmet>
      <DividerStyled
        icon={
          <HiOutlineUser
            color={main}
            style={{ fontSize: "25px", marginRight: "-10px" }}
          />
        }
        textColor={main}
      >
        درباره من
      </DividerStyled>
      <Box
        component="div"
        sx={{
          mx: 3,
          my: 5,
          p: 3,
          backgroundColor: "primary.main",
          backdropFilter: "blur(5px)",
          boxShadow: `0 0 0 2px ${main}`,
          borderRadius: "15px",
        }}
      >
        <ParticlesComponent value={stars} />
        <Typography
          color="info.main"
          sx={{
            textAlign: "left",
            direction: "ltr",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          سلام :)) اسم من ابولفضل تقدسیه <br />
          من یک برنامه نویس خودآموز هستم که بیشتر چیزایی که الان یاد دارم رو از
          منابع خارجی یاد گرفتم و یه مقداریش هم از دوره های آموزشی و مدرسه .{" "}
          <br />
          اوایل هیچ میلی به برنامه نویسی نداشتم و صرفا بخاطر آسون بودن این رشته
          توی مدرسه انتخابش کردم, اما به مرور بیشتر بهش علاقه مند شدم <br />
          من همیشه دوست داشتم که چیزهایی رو خلق کنم که هم ازش لذت ببرم و هم
          دیگران ازش استفاده کنند. فکر کنم برنامه نویسی یکی از بهترین راه ها
          برای رسیدن به این هدفه
          <br />
          پارسال اول مهر, هنگام شروع سال تحصیلی, من هیچ ایده ای از برنامه نویسی
          و چگونگیش نداشتم, با گذشت چند هفته معلم ها شروع به درس دادن کردن و من
          هم کمی با این رشته آشنا شدم, اما همچنان میلی به یادگیری نداشتم . ولی
          با گذر زمان بیشتر متوجه پیچیدگی و گستردگی این رشته شدم و همین باعث شد
          علاقه من به این رشته بیشتر بشه, بعد با خودم گفتم وقتشه پا رو فراتر
          بذارمو بیشتر ازون چیزی که معلم یاد داده, یاد بگیرم. شروع کردم به دیدن
          ویدیو های آموزشی html و css داخل یوتیوب و روز به روز به مهارتم اضافه
          میشد. بعد از یادگیری این دو, نوبت یادگیری جاوااسکریپت بود. این زبان از
          دوتای قبلی سخت تر بود و یادگیریش مشکل تر, ولی اینم به خوبی یاد گرفتم و
          میتونستم تقریبا هرچیزی که به ذهنم میرسید رو با این زبان پیاده سازی
          کنم. درست همین موقع بود که عطش من برای یادگیری چندین برابر شده بود, پس
          به سراغ فریم ورک ها و کتابخانه های جدید برای یادگیری رفتم, ری اکت و
          بوت استرپ و ده ها کتابخانه ی دیگه, احتمالا همین الان که داری این متن
          رو میخونی, من درحال یادگیری چیزای جدیدم:)) <br />
          آره دیگه این بود داستان آشنایی بنده با دنیای برنامه نویسی <br />
        </Typography>
        <Typography
          color="warning.main"
          variant="h5"
          sx={{ textAlign: "left", direction: "ltr", mt: 3 }}
        >
          - سوالی, حرفی چیزی بود تلگرام درخدمتم :)){" "}
          <RiHeart2Fill
            style={{ color: "red", fontSize: "1rem", marginBottom: "-2px" }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
