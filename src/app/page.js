import CourseSection from "@/component/course";
import CoursePage from "@/component/FeatureCourse";
import HeroSection from "@/component/HeroSection";
import Instractor from "@/component/Instractor";
import LatestPost from "@/component/Post";
import StatsSection from "@/component/TotalStudent";
import WelcomeSection from "@/component/WellCome";
import WhyChooseUs from "@/component/WhyChoseUS";


export default function Home() {
  return (
    <div className="">
        <HeroSection/>
        <WelcomeSection/>
        <CourseSection/>
        <CoursePage/>
        <StatsSection/>
        <WhyChooseUs/>
        <Instractor/>
        <LatestPost/>
        
    </div>
  );
}
