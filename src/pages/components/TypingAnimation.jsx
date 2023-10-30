import { Typography, Box } from "@mui/material";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
    const nameEl = useRef(null)
    const infoEl = useRef(null)
    const strings = [
        "من یک توسعه دهنده فرانت اند هستم",
        "من یک دیزاینر هستم"]
    useEffect(() => {
        const typedNamed = new Typed(nameEl.current, {
            strings: ["ابولفضل تقدسی"],
            typeSpeed: 100,
            backDelay: 50,
            backSpeed: 10,
            showCursor: false
        });
        const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 3000,
            typeSpeed: 40,
            backSpeed: 50,
            backDelay: 500,
            loop: true,
            showCursor: false
        });
        return () => {
            typedNamed.destroy();
            typedInfo.destroy()
        }
    }, [])
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }} component="div">
                <Typography sx={{ textShadow: "0 0 10px #000", fontWeight: "bold" }} color="secondary.main" variant="h2">{"{{"}</Typography>
                <Typography ref={nameEl} sx={{ textAlign: "center", p: 1, textShadow: "0 0 10px #000", fontWeight: "bold", fontSize: {xs: "2rem", sm: "3rem"} }} color="info.main" />
                <Typography sx={{ textShadow: "0 0 10px #000", fontWeight: "bold" }} color="secondary.main" variant="h2">{"}}"}</Typography>
            </Box>
            <Typography ref={infoEl} sx={{ textAlign: "center", textDecoration: "underline", textDecorationColor: "#000", textShadow: "0 0 10px #000", fontSize: {xs: "1.5rem", sm: "2rem"} }} color="info.main" />
        </>
    )
}

export default TypingAnimation;