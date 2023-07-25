import MobileModule from "./module/MobileModule.js";
import AosModule from "./module/AosModule.js";
import BtnToTopModule from "./module/BtnToTopModule.js";
import PopupModule from "./module/PopupModule.js";
import SwiperModule from "./module/SwiperModule.js";
// import LoadModule from "./module/LoadModule.js";
import LoadMoreModule from "./module/LoadMoreModule.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import HeaderModule from "./module/HeaderModule.js";
import SideModule from "./module/SideModule.js";
import ShowHideModule from "./module/ShowHideModule.js";
import OpenPopup from "./module/OpenPopup.js";
import SmoothScrollModule from "./module/SmoothScrollModule.js";
import SplitModule from "./module/SplitModule.js";
import Animated from "./module/Animated.js";
import CollapseModule from "./module/CollapseModule.js";
import scrollContent from "./module/ScrollContent.js";
import CountUpModule from "./module/CountUpModule.js";
import Select2Module from "./module/Select2Module.js";
import RangeModule from "./module/RangeModule.js";
import PlusMinusModule from "./module/PlusMinModule.js";
import RatingModule from "./module/RatingModule.js";
import View3DModule from "./module/View3DModule.js";
import InputModule from "./module/InputModule.js";
import ParallaxModule from "./module/ParallaxModule.js";



window.addEventListener("DOMContentLoaded", () => {
    MobileModule();
    SplitModule()
    AosModule();
    BtnToTopModule();
    PopupModule();
    SwiperModule();
    // LoadModule();
    GalleryModule();
    TabModule();
    HeaderModule();
    SideModule();
    ShowHideModule();
    OpenPopup();
    Animated();
    SmoothScrollModule();
    LoadMoreModule();
    CollapseModule();
    // CmtModule();
    scrollContent();
    CountUpModule();
    Select2Module();
    RangeModule();
    PlusMinusModule();
    RatingModule();
    View3DModule()
    InputModule()
    ParallaxModule();
});