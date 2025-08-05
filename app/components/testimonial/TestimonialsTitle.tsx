import ScrollWrapper from "../layout/ScrollWrapper";
import AngledText from "../shared/AngledText";

const TestimonialTitle = () => {
  return (
    <ScrollWrapper className="relative pt-5 w-auto">
      <AngledText side="right" className="right-0 absolute top-[8px]">
        fetch
      </AngledText>
      <h4 className="text-3xl md:text-4xl lg:text-6xl text-foreground-title">
        <span className="text-sm lg:text-md">https://_</span>
        myTest
        <span className="text-primary">imonials</span>
        <span className="text-sm lg:text-md">.com</span>
      </h4>
    </ScrollWrapper>
  );
};

export default TestimonialTitle;
