import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1000,
    offset: 100,
});

import mobileNav from  "./utils/mobile-nav";
mobileNav();