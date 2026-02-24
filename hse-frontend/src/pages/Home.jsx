import CareerPath from "../components/CareerPath";
import Certifications from "../components/Certifications";
import CTA from "../components/CTA";
import DigitalConsultants from "../components/DigitalConsultants";
import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import QualificationRoadmap from "../components/QualificationRoadmap";
import Testimonials from "../components/Testimonials";
import WhyHSE from "../components/WhyHSE";
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
