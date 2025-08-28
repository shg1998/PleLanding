import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="شایستگی ها"
            paragraph="برای تعریف جایگاه‌های شغلی و مسیر رشد حرفه‌ای، لازم است اجزای اصلی آن مانند رسته، شغل، نقش، مسئولیت، وظایف، تخصص‌ها و دانش‌ها به‌طور شفاف مشخص شوند. در ادامه، این اجزا معرفی و تعریف شده‌اند."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
