import { Box, Typography } from "@mui/material";
import BG from "../assets/bg06.jpg";
import { HiOutlineUser } from "react-icons/hi";
import { RiHeart2Fill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import { stars } from "../particles/particles";
import DividerStyled from "./components/DividerComponent";
import { ParticlesComponent } from "./components";

const About = () => {
    return (
        <Box sx={{
            height: "100vh",
            backgroundImage: `url(${BG})`,
            backgroundPosition: "left",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflowY: "auto"
        }}>
            <Helmet>
                <title>
                    Abolfazl Taghadosi | About
                </title>
            </Helmet>
            <DividerStyled icon={<HiOutlineUser color="#fff" style={{ fontSize: "25px", marginRight: "-10px" }} />}>
                درباره من
            </DividerStyled>
            <Box component="div" sx={{ mx: 3, my: 5, p: 3, background: "transparent", backdropFilter: "blur(5px)", boxShadow: "0 0 10px #000", borderRadius: "15px" }}>
                <ParticlesComponent value={stars} />
                <Typography color="info.main" sx={{ textAlign: "left", direction: "ltr", fontSize: { xs: "1.5rem", sm: "2rem" } }}>
                    سلام :)) اسم من ابولفضله, ابولفضل تقدسی <br />
                    من یک برنامه نویس خودآموز هستم که بیشتر چیزایی که الان یاد دارم رو از منابع خارجی یاد گرفتم و یه مقداریش هم از دوره های آموزشی و مدرسه . <br />
                    اوایل هیچ میلی به برنامه نویسی نداشتم و صرفا بخاطر آسون بودن این رشته توی مدرسه انتخابش کردم, اما به مرور بیشتر بهش علاقه مند شدم <br />
                    من علاقه ی زیادی به خلق کردن دارم, فرقی نداره نقاشی باشه یا یه مجسمه یا حتی یک صفحه وب, من در هرصورت عاشق به وجود آوردنشم<br />
                    پارسال اول مهر, هنگام شروع سال تحصیلی, من هیچ ایده ای از برنامه نویسی و چگونگیش نداشتم, با گذشت چند هفته معلم ها شروع به درس دادن کردن و من هم کمی با این رشته آشنا شدم, اما همچنان میلی به یادگیری نداشتم . ولی با گذر زمان بیشتر متوجه پیچیدگی و گستردگی این رشته شدم و همین باعث شد علاقه من به این رشته بیشتر بشه, بعد با خودم گفتم وقتشه پا رو فراتر بذارمو بیشتر ازون چیزی که معلم یاد داده, یاد بگیرم. شروع کردم به دیدن ویدیو های آموزشی html و css داخل یوتیوب و روز به روز به مهارتم اضافه میشد. بعد از یادگیری این دو, نوبت یادگیری جاوااسکریپت بود. این زبان از دوتای قبلی سخت تر بود و یادگیریش مشکل تر, ولی اینم به خوبی یاد گرفتم و میتونستم تقریبا هرچیزی که به ذهنم میرسید رو با این زبان پیاده سازی کنم. درست همین موقع بود که عطش من برای یادگیری چندین برابر شده بود, پس به سراغ فریم ورک ها و کتابخانه های جدید برای یادگیری رفتم, ری اکت و بوت استرپ و ده ها کتابخانه ی دیگه, احتمالا همین الان که داری این متن رو میخونی, من درحال یادگیری چیزای جدیدم:)) <br />
                    آره دیگه این بود داستان آشنایی بنده با دنیای برنامه نویسی <br />

                </Typography>
                <Typography color="warning.main" variant="h5" sx={{ textAlign: "left", direction: "ltr", mt: 3 }}>
                    - سوالی, حرفی چیزی بود تلگرام درخدمتم :)) <RiHeart2Fill style={{ color: "red", fontSize: "1rem", marginBottom: "-2px" }} />
                </Typography>
            </Box>
        </Box>
    )
}


export default About;