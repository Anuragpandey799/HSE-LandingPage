import CareerPath from "../components/home/CareerPath";
import Certifications from "../components/home/Certifications";
import CTA from "../components/home/CTA";
import DigitalConsultants from "../components/home/DigitalConsultants";
import Hero from "../components/home/Hero";
import Pillars from "../components/home/Pillars";
import QualificationRoadmap from "../components/home/QualificationRoadmap";
import Testimonials from "../components/home/Testimonials";
import WhyHSE from "../components/home/WhyHSE";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        <Hero />
        <Pillars/>
        <WhyHSE/>
        <QualificationRoadmap/>
        <Certifications/>
        <CareerPath/>
        <DigitalConsultants/>
        <Testimonials/>
        <CTA/>
      </div>
    </MainLayout>
  );
};

export default Home;
