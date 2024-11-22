import Popup from "../components/common/PopupKatchap";
import AboutSection from "../components/feature/AboutUs/AboutSection";
import SlideBar from "../components/feature/SlideBar/SlideBar";
import Types from "../components/feature/Types/Types";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <div className=" overflow-hidden"  >
      <Popup/>
      <SlideBar/>
      <AboutSection/>
      <Types/>
      <ContactUs/>
    </div>
  )
}
