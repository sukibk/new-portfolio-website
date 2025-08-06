import ScrollWrapper from "../layout/ScrollWrapper";
import AngledText from "../shared/AngledText";

const ProjectsTitle = () => {
  return (
    <ScrollWrapper className="relative pt-5 w-auto mb-12">
      <AngledText side="left" className="left-0 absolute top-[8px]">
        export
      </AngledText>
      <h4 className="text-3xl md:text-4xl lg:text-6xl text-foreground-title">
        <span className="text-sm lg:text-md">const </span>
        my<span className="text-primary">Projects</span>
        <span className="text-sm lg:text-md"> = [...</span>
        <span className="text-primary text-sm lg:text-md">6</span>
        <span className="text-sm lg:text-md">]</span>
      </h4>
    </ScrollWrapper>
  );
};

export default ProjectsTitle;
