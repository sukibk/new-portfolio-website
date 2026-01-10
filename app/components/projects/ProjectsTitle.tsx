import ScrollWrapper from "../layout/ScrollWrapper";
import AngledText from "../shared/AngledText";

const ProjectsTitle = () => {
  return (
    <ScrollWrapper className="relative pt-5 w-auto mb-12">
      <AngledText side="left" className="left-0 absolute top-[8px]">
        export
      </AngledText>
      <h4 className="text-3xl md:text-4xl lg:text-6xl text-foreground-title">
        <span className="text-sm lg:text-md text-foreground-text/50 font-code">
          const{" "}
        </span>
        my<span className="text-primary">Projects</span>
        <span className="text-sm lg:text-md text-foreground-text/50 font-code">
          {" "}
          = [...
        </span>
        <span className="text-primary text-sm lg:text-md font-code animate-pulse">
          6
        </span>
        <span className="text-sm lg:text-md text-foreground-text/50 font-code">
          ]
        </span>
      </h4>
    </ScrollWrapper>
  );
};

export default ProjectsTitle;
