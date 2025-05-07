import Image from "next/image";
import Resume from "./Resume";
import AngledText from "../shared/AngledText";
import ScrollWrapper from "../layout/ScrollWrapper";
import Button from "../layout/Button";

const ResumeContainer = () => {
  return (
    <aside className="h-full flex flex-1 flex-col items-center justify-center lg:max-w-[35rem] xs:self-center lg:self-start">
      <ScrollWrapper className="relative pt-5 w-auto">
        <AngledText side="left" className="left-0 absolute top-[8px]">
          kubectl egt
        </AngledText>
        <h4 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground-title">
          experiences/
          <span className="text-primary">Timeline</span>
        </h4>
      </ScrollWrapper>
      <ScrollWrapper>
        <div className="hidden lg:block w-[120mm] xl:w-[127mm] h-[160mm] xl:h-[174mm] rounded-lg  border-t-3 border-b-3 border-primary overflow-hidden mt-10">
          <Resume />
        </div>
        <div className="lg:hidden">
          <Button variant="primary">Download Resume</Button>
        </div>
      </ScrollWrapper>
    </aside>
  );
};

export default ResumeContainer;
